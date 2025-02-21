// src/pages/dashboard.js
'use client'
import { useEffect, useState } from 'react';
import SignIn from '@/components/SignIn';

export default function Dashboard() {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/github?username=yourusername');
      const data = await response.json();
      setGithubData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {githubData && <pre>{JSON.stringify(githubData, null, 2)}</pre>}
      <SignIn />
    </div>
  );
}