import { useEffect, useState } from 'react';
import { Globe, Heart, CheckSquare, Map, Search, Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


function Header() {

  const [userInfo, setUserInfo] = useState();


  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo) setUserInfo(userInfo);
  }, [])





  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const login = useGoogleLogin({
    scope: 'openid profile email',
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log("Login error", error),
  });


  const handleSignIn = () => {
    const user = localStorage.getItem('user');

    if (user) {
      // User is already signed in, redirect to home page
      window.location.href = '/home';
    } else {
      // User is not signed in, show sign-in dialog
      setOpenDialog(true);
    }
  }

  const GetUserProfile = (tokenInfo) => {
    axios.get('https://openidconnect.googleapis.com/v1/userinfo', {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
      }
    })
      .then((resp) => {
        console.log("✅ User Info:", resp.data);
        localStorage.setItem('user', JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();

      })
      .catch((err) => {
        console.error("❌ Error fetching user info:", err);
      });
  };


  return (
    <>
      <nav className="relative z-10 bg-white bg-opacity-90 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <Link to={'/'}>
              <div className="flex items-center mt-4">
                <div className="relative">
                  <Globe className="h-8 w-8 text-blue-600 animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
                <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">Travel Wishlist</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/home" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Home</a>
              <a href="/wishlist" className="text-gray-600 hover:text-blue-600 font-medium flex items-center group">
                <Heart className="h-5 w-5 mr-1 group-hover:text-red-500 transition-transform group-hover:scale-110" />
                <span className="relative">
                  Wishlist
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
              <a href="/visited" className="text-gray-600 hover:text-blue-600 font-medium flex items-center group">
                <CheckSquare className="h-5 w-5 mr-1 group-hover:text-green-500 transition-transform group-hover:scale-110" />
                <span className="relative">
                  Visited
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>

              {userInfo ? (
                <div className="flex items-center space-x-4">
                  <img
                    src={userInfo.picture}
                    alt="profile"
                    className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300"
                    
                  />
                  <button onClick={()=>{
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}  className="w-full px-4 py-2 text-sm font-medium text-white border border-red-600 cursor-pointer bg-red-600 rounded-lg shadow-md  hover:bg-white hover:text-red-500 hover:shadow-lg transition-all duration-300">Logout</button>
                </div>
              ) : (
                <button
                  onClick={handleSignIn}
                  className='border border-black rounded-2xl p-2 bg-black text-white font-bold cursor-pointer hover:bg-white hover:text-black'
                >
                  Sign In
                </button>
              )}

            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50"
              >
                {mobileMenuOpen ?
                  <X className="h-6 w-6" /> :
                  <Menu className="h-6 w-6" />
                }
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-white bg-opacity-95 backdrop-blur-lg shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/home" className="block px-3 py-2 text-blue-600 font-medium border-l-4 border-blue-600">Home</a>
              <a href="/wishlist" className=" px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors duration-200 flex items-center">
                <Heart className="h-5 w-5 mr-1" /> Wishlist
              </a>
              <a href="/visited" className=" px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors duration-200 flex items-center">
                <CheckSquare className="h-5 w-5 mr-1" /> Visited
              </a>
            </div>
          </div>
        )}
      </nav>
      {
        openDialog &&
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full relative transition-all duration-300 scale-95 opacity-0 animate-fade-in">
            <button
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-xl"
              onClick={() => setOpenDialog(false)}
            >
              ×
            </button>
            {/* <h2 className="text-2xl font-semibold text-center mb-4">Welcome</h2> */}
            <div className='flex items-center justify-center '>
              <img className='w-15' src='/src/assets/logo-removebg.png' alt="" />
              <p className='-ml-3 mt-3 font-semibold'>ravel wishlist</p>
            </div>
            <p className="text-center text-gray-600 mb-6">Sign in to continue</p>
            <button
              onClick={login}
              className="w-full flex items-center justify-center gap-3 border cursor-pointer border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              <FcGoogle size={20} />
              Sign in with Google
            </button>
          </div>
        </div>
      }
    </>
  )
}

export default Header
