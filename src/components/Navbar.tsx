import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Navbar: React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Football Turf
          </Link>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {user.isAdmin && (
                  <Link 
                    to="/admin" 
                    className="hover:text-green-200"
                  >
                    Admin Dashboard
                  </Link>
                )}
                <span>{user.email}</span>
                <button 
                  onClick={handleLogout}
                  className="bg-green-700 px-4 py-2 rounded hover:bg-green-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/login"
                className="bg-green-700 px-4 py-2 rounded hover:bg-green-800"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;