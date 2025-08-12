import ProtectedRoute from '../components/ProtectedRoute';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <ProtectedRoute>
      <DashboardLayout>
        {/* Dashboard content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">
            Welcome, {currentUser.displayName || currentUser.email}
          </h1>
          {/* Dashboard content here */}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
