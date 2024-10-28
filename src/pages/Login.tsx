import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore(state => state.login);

  const handleGoogleLogin = () => {
    // Simulating Google login for demo
    // In real app, this would integrate with Google OAuth
    login('demo@example.com', false);
    navigate('/');
  };

  const handleAdminLogin = () => {
    // Simulating admin login for demo
    login('admin@example.com', true);
    navigate('/admin');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        <div className="space-y-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg px-6 py-3 text-gray-700 hover:bg-gray-50"
          >
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google" 
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Demo Buttons</span>
            </div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full bg-green-500 text-white rounded-lg px-6 py-3 hover:bg-green-600"
          >
            Login as User
          </button>

          <button
            onClick={handleAdminLogin}
            className="w-full bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600"
          >
            Login as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;