import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  
  if (!user) {
    return <div>Redirecting to login...</div>;
  }
  
  return (
    <DashboardLayout>
      {/* Dashboard content */}
    </DashboardLayout>
  );
}
