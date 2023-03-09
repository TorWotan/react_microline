import React, { useEffect } from 'react';
import './App.css';
import Clicker from './Tasks/Clicker';
import useSaveCount from './hook/useSaveCount';
import { useRequestClickData } from './hook/useRequestClickData';

// import Fibonacci from './Tasks/Fibonacci';

function App() {
  const [countDelay, setCountDelay] = React.useState(0);

  const { countFromServer, isLoading: isLoadingRequests } = useRequestClickData();
  const { isLoading: isLoadingSave } = useSaveCount(countDelay, countFromServer);

  useEffect(() => {
    setCountDelay(countFromServer?.count ?? 0);
  }, [countFromServer?.count]);

  // console.log(countDelay, 'countDelay');
  // console.log(countFromServer, 'countFromServer');

  return (
    <div className="App">
      <header className="App-header">
        {/* <Fibonacci /> */}

        <Clicker
          countFromServer={countFromServer}
          countDelay={countDelay}
          onChangedByDelay={(count) => setCountDelay(count)}
          isLoading={isLoadingSave || isLoadingRequests}
        />
      </header>
    </div>
  );
}

export default App;
