import React from 'react';
import { useState } from 'react';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);

  if(isLoading) {
    return <div>Loading.....</div>
  }

  return (
    <div>
      It's a dashboard component
    </div>
  );
}

export default Dashboard;
