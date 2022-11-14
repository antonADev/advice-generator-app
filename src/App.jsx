import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MainComponent from './components/main-app/main.component';
import { fetchAdviceData } from './features/adviceSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdviceData());
  }, []);

  return <MainComponent />;
}

export default App;
