import React, {useState} from 'react';
import './App.module.css';
import Counter from "./components/Counter/Counter";
import CounterSettings from "./components/CounterSettings/CounterSettings";
import styles from './App.module.css';

function App() {
   const [counter, setCounter] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)
    const [editMode, setEditMode] = useState<boolean>(true)

    const handlerInc = () => {
        setCounter(counter + 1)
    }

    const handlerReset = () => {
        setCounter(startValue)
    }

    const setSettings = (startValue: number, maxValue: number) => {
        setCounter(+startValue)
        setMaxValue(+maxValue)
    }


    const error = startValue < 0 || startValue >= maxValue ? true : false


  return (
    <>
        <div className={styles.wrapper}>
            <Counter
                handlerInc = {handlerInc}
                handlerReset = {handlerReset}
                counter = {counter}
                setSettings = {setSettings}
                maxValue = {maxValue}
                setCounter = {setCounter}
                editMode={editMode}
                startValue = {startValue}
                error = {error}

            />
            <CounterSettings
                handlerInc = {handlerInc}
                handlerReset = {handlerReset}
                counter = {counter}
                setSettings = {setSettings}
                maxValue = {maxValue}
                startValue = {startValue}
                setMaxValue = {setMaxValue}
                setStartValue = {setStartValue}
                setEditMode = {setEditMode}
                editMode={editMode}
                error = {error}
            />
        </div>
    </>
  );
}

export default App;
