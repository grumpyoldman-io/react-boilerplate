import { useCallback, useState } from 'react';
import Button from '@component/Button';
import logo from './logo.svg';

function App() {
  const [clickCount, setClickCount] = useState(1);

  const handleClick = useCallback(() => {
    window.alert(`Clicked ${clickCount} times!`);
    setClickCount(clickCount + 1);
  }, [clickCount]);

  return (
    <div>
      <header>
        <img src={logo} alt="logo" className="w-8 h-8 my-16 mx-auto" />
        <div className="flex flex-col">
          <p className="text-3xl font-bold mb-5 text-center">
            Edit <code className="font-mono">src/App.tsx</code> and save to
            reload.
          </p>
          <Button className="m-auto" onClick={handleClick}>
            PRESS ME
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
