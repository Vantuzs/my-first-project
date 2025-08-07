import React from 'react';
import { useState } from 'react';

const Dashboard123 = () => {
  const [isLoading, setIsLoading] = useState(false);

  if(isLoading) {
    return <div>Loading.....</div>
  }

const Dashboard = () => {
  return (
    <div>
      It's a dashboard component
    </div>
  );
}

export default Dashboard;
