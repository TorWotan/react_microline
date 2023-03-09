import React from 'react';

import debounce from 'lodash.debounce';

import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function Clicker({ countDelay = 0, onChangedByDelay, isLoading, countFromServer }) {
  const [count, setCount] = React.useState(countDelay);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateCount = React.useCallback(
    debounce((countDelay) => {
      onChangedByDelay(countDelay);
    }, 1000),
    [],
  );

  const onClickButton = () => {
    setCount(count + 1);
    updateCount(count + 1);
  };

  return (
    <div>
      <div>
        <Button variant="contained" disabled={isLoading} onClick={onClickButton} color="warning">
          Кликнуть
        </Button>
      </div>
      {/* <button disabled={isLoading} onClick={onClickButton}>
        Кликнуть
      </button> */}

      <Typography
        variant="h6"
        component="h2"
        color="#247db1"
        bgcolor="#e5f6fd"
        m="10px"
        p="7px"
        borderRadius={'5px'}>
        <h>Кликнули {count} раз</h>
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        color="#91a4ab"
        bgcolor="#fefbea"
        p="0.5px 5px 0.5px 5px"
        borderRadius={'5px'}>
        <p>Через 1 секунду: {countDelay} раз</p>
        <p>Количество кликов по версии сервера: {countFromServer} раз</p>
      </Typography>
    </div>
  );
}

export default Clicker;
