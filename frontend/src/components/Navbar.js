import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { currentUser, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">EXAMHUB.AI</div>
            <div className="ml-2 text-xs bg-secondary text-white px-2 py-1 rounded-full">BETA</div>
          </div>
          
          {!loading && (
            <div className="flex items-center space-x-4">
              {currentUser ? (
                <>
                  <button 
                    onClick={() => router.push('/dashboard')}
                    className="text-gray-600 hover:text-primary"
                  >
                    Dashboard
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => router.push('/login')}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => router.push('/login')}
                    className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-purple-600 glow-effect"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
