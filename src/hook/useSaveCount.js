import axios from 'axios';
import { useEffect, useState } from 'react';

const useSaveCount = async (countDelay, countFromServer) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function saveData(count) {
      try {
        if (count) {
          setIsLoading(true);
          const countDelay = { count };
          const countServer = await axios.post(
            'https://lk.zont-online.ru/api/button_count',
            countDelay,
            {
              headers: {
                'X-ZONT-Client': 'Tod3110@yandex.ru',
                'X-ZONT-Token': 'owa5306199dggie3j4o2197ppay4nzcl',
              },
            },
          );
          console.log(countServer.data, 'Отправка данных на сервер');
        }
      } catch (error) {
        console.log('Ошибка при добавлении счетчика');
      } finally {
        setIsLoading(false);
      }
    }
    const isActualData = countFromServer?.count && countFromServer.count !== countDelay;

    if (!countFromServer?.count || isActualData) {
      saveData(countDelay);
      return;
    }
  }, [countDelay, countFromServer?.count]);

  return { isLoading };
};
export default useSaveCount;
