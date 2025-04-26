import React, { useState, useRef, useEffect } from 'react';
import { CheckSquare, Camera, Calendar, MapPin, Star, Trash2, X, Download } from 'lucide-react';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage, db } from '../services/FirebaseConfig';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const VistedItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const [uploadedImagesMap, setUploadedImagesMap] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();
  const fileInputRef = useRef();
  const modalRef = useRef();

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  // Handle escape key press to close modal
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        setShowModal(false);
      }
    }

    if (showModal) {
      document.addEventListener('keydown', handleEscapeKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showModal]);

  // Open image in full screen
  const openFullscreen = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };




  // Generate stars based on rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  // Handle file selection and upload
  const handleFileSelect = async (event) => {
    try {
      const files = event.target.files;
      if (!files.length) return;

     
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (!storedUser || !storedUser.sub) {
        alert("User not logged in!");
        return;
      }

      const userId = storedUser.sub;
      const itemId = item.id;

      const newUploadedImages = [];

      // Upload each file to Firebase Storage
      for (const file of files) {
        const storageRef = ref(storage, `uploads/${userId}/${itemId}/${Date.now()}_${file.name}`);
        await uploadBytes(storageRef, file);

        
        const downloadURL = await getDownloadURL(storageRef);
        newUploadedImages.push(downloadURL);
      }

      // Update Firestore with new image URLs
      const itemRef = doc(db, 'VisitedTrips', itemId);
      await updateDoc(itemRef, {
        photos: [...(item.photos || []), ...newUploadedImages], // Append new URLs to existing ones
      });

      // Directly update local state with the new URLs (this will re-render the component)
      setUploadedImagesMap((prev) => ({
        ...prev,
        [itemId]: [...(prev[itemId] || []), ...newUploadedImages],
      }));

      toast.success('Image uploaded successfully');

    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Failed to upload images. Please try again.");
    }
  };

  const deleteCard = async (id) => {
    try {
      if (!window.confirm('Are you sure you want to delete this item? This action cannot be undone.')) {
        return; 
      }
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (!storedUser || !storedUser.sub) {
        alert("User not logged in!");
        return;
      }

      // First, delete associated images from Storage if they exist
      if (item.photos && item.photos.length > 0) {
        // For each photo URL, extract the file path and delete from Storage
        for (const photoUrl of item.photos) {
          try {
            // Extract the path from the URL
            const urlPath = decodeURIComponent(photoUrl.split('/o/')[1].split('?')[0]);
            const imageRef = ref(storage, urlPath);

            // Delete the file
            await deleteObject(imageRef);
          } catch (imageError) {
            console.error("Error deleting image:", imageError);
            // Continue with other images even if one fails
          }
        }
      }
      
      // Then delete the document from Firestore
      const itemRef = doc(db, 'VisitedTrips', id);
      await deleteDoc(itemRef);
      
      toast.success('Item deleted successfully');
      navigate(0);

    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error('Failed to delete item. Please try again.');
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover cursor-pointer"
            onClick={() => openFullscreen(item.image)}
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-green-600 text-white flex items-center">
            <CheckSquare className="h-4 w-4 mr-1" />
            Visited
          </div>
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 px-3 py-1 rounded-full text-white flex items-center">
            <Camera className="h-4 w-4 mr-1" />
            {item.photos ? item.photos.length : 0} photos
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
          <p className="text-gray-600 mb-3">{item.description}</p>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-700">{item.visitDate}</span>
            </div>

            <div className="flex">
              {renderStars(item.rating)}
            </div>
          </div>

          <div className="mb-4">
            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
              {item.category}
            </span>
            {item.wouldRecommend && (
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full ml-2">
                Recommended
              </span>
            )}
          </div>

          {expanded && item.photos && item.photos.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-4">
              {item.photos.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Uploaded ${index + 1}`}
                  className="w-full h-24 object-cover rounded-md cursor-pointer"
                  onClick={() => openFullscreen(url)}
                />
              ))}
            </div>
          )}

          <div className="flex justify-between items-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              {!expanded ? "Show photos" : "Close"}
            </button>

            <div className="flex space-x-2">
              <button onClick={() => deleteCard(item.id)} className="bg-red-100 text-red-800 hover:bg-red-200 p-2 rounded-full">
                <Trash2 className='h-4 w-4' />
              </button>
              <button
                className="bg-blue-100 text-blue-800 hover:bg-blue-200 p-2 rounded-full"
                onClick={() => fileInputRef.current.click()}
              >
                <Camera className="h-4 w-4" />
              </button>
              <input
                type="file"
                accept="image/*"
                multiple
                ref={fileInputRef}
                onChange={handleFileSelect}
                className="hidden"
              />
              <button className="bg-purple-100 text-purple-800 hover:bg-purple-200 p-2 rounded-full">
                <MapPin className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div ref={modalRef} className="relative max-w-4xl max-h-screen w-full">
            <div className="absolute top-2 right-2 flex space-x-2 z-10">
              {/* Download Button */}
              <button

                className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700"
                title="Download image"
              >
                <Download className="h-6 w-6" />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
                title="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <img
              src={selectedImage}
              alt="Full size view"
              className="max-h-screen max-w-full object-contain mx-auto"
            />
          </div>
        </div>
      )}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default VistedItem;