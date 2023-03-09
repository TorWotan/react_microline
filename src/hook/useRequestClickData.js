import { useEffect, useState } from 'react';
import axios from 'axios';

export const useRequestClickData = () => {
  const [countFromServer, setCountFromServer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get('https://lk.zont-online.ru/api/button_count');
        setCountFromServer(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        // console.log(countFromServer, 'countFromServer');
      }
    }
    fetchData();
  }, []);
  return { countFromServer, isLoading };
};
