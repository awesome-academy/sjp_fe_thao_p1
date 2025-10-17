import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './features/user/userSlice';
import type { AppDispatch } from './app/store';
import MainLayout from './components/layouts/MainLayout';
import { LoadingSpinner } from './components/common/Loading';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('storedUser');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        dispatch(setUser(userData));
      } catch (error) {
        console.error('Failed to parse user data from localStorage', error);
        localStorage.removeItem('storedUser');
      }
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingSpinner size="large" fullScreen text="Loading..." />;
  }

  return <MainLayout />;
}

export default App;
