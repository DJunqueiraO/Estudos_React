import { useEffect } from 'react';
import './zustand.css';
import { Home } from './pages/pages';
import { useCounterStore } from './store/store';

const logCount = () => {
  const count = useCounterStore.getState().value
  console.log(count)
}

const refreshCount = () => {
  useCounterStore.setState({value: 1})
}

export function Zustand() {

  const count = useCounterStore(store => store.value)

  useEffect(() => {
    logCount()
  }, [count])

  useEffect(() => {
    refreshCount()
  }, [])

  return (
    <div className="zustand">
      <Home count={count}/>
    </div>
  );
}