import React, {Dispatch, SetStateAction} from 'react';
import styles from './Counter.module.css';

type CounterPropsType = {
    handlerInc: () => void
    handlerReset: () => void
    counter: number
    setSettings: (maxValue: number, startValue: number) => void
    maxValue: number
    setCounter: Dispatch<SetStateAction<number>>
    editMode: boolean
    startValue: number
    error: boolean
}

const Counter = (props: CounterPropsType) => {

const dataClassName =  props.counter === props.maxValue ? styles.counterNumberMax : styles.counterNumberDefault

    return (
        <div className={styles.wrapper}>
            <div className={styles.counter}>
                <div className={styles.counterDisplay}>

                    {props.error ? <div className={styles.textError}>Text error that Natasha wants</div> : props.editMode ?
                        <div className={styles.text}>Set Value that Natasha wants</div> :
                    <div className={dataClassName}>{props.counter}</div> }
                </div>
                <div className={styles.buttons}>
                    <button className={styles.incButton} disabled={props.counter === props.maxValue || props.error} onClick={props.handlerInc}>Inc</button>
                    <button className={styles.resetButton} disabled={props.counter === props.startValue || props.error} onClick={props.handlerReset}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;