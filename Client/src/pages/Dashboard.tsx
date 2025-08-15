import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen p-6 mt-10">
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button onClick={logout} className="border px-3 py-1 rounded">Logout</button>
        </div>
        <div className="border p-4 rounded">
          <p><b>User ID:</b> {user?.id}</p>
          <p><b>Email:</b> {user?.email}</p>
          <p><b>Joined:</b> {new Date(user?.createdAt ?? '').toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
