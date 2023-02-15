import React, {ChangeEvent, Dispatch, SetStateAction, useEffect,} from 'react';
import styles from './CounterSettings.module.css';
import SuperButton from "../SuperButton/SuperButton";

type CounterPropsType = {
    handlerInc: () => void
    handlerReset: () => void
    setSettings: (maxValue: number, startValue: number) => void
    maxValue: number
    startValue: number
    setMaxValue: Dispatch<SetStateAction<number>>
    setStartValue: Dispatch<SetStateAction<number>>
    setEditMode: Dispatch<SetStateAction<boolean>>
    setCounter: Dispatch<SetStateAction<number>>
    editMode: boolean
    error: boolean
    counter: number
}

const CounterSettings = (props: CounterPropsType) => {

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        let maxValueAsString = localStorage.getItem('maxValue')
        let counterValueAsString = localStorage.getItem('counterValue')
        if(startValueAsString && maxValueAsString && counterValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            let newMaxValue = JSON.parse(maxValueAsString)
            let newCounterValue = JSON.parse(counterValueAsString)
            props.setStartValue(newStartValue)
            props.setMaxValue(newMaxValue)
            props.setCounter(newCounterValue)
            props.setEditMode(false)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(props.startValue))
        localStorage.setItem('maxValue', JSON.stringify(props.maxValue))
        localStorage.setItem('counterValue', JSON.stringify(props.counter))
    }, [props.startValue, props.maxValue, props.counter])





    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
        props.setEditMode(true)

    }

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value)
        props.setEditMode(true)

    }

    const onClickHandler = () => {
            props.setSettings(props.startValue, props.maxValue )
            // setMaxValue('')
            // setStartValue('')
        props.setEditMode(false)
    }
    const disabledInc = !props.editMode || props.error
    return (
        <div className={styles.wrapper}>
            <div className={styles.counter}>
                <div className={styles.counterDisplay}>
                   <div className={styles.texts}>
                       <div className={styles.text}>max value:</div>
                       <div className={styles.text}>start value:</div>
                   </div>
                   <div className={styles.inputs}>
                       <input className={props.startValue >= props.maxValue ? styles.inpError : styles.inp} value={props.maxValue} onChange={onChangeMaxHandler} type="number" />
                       <input className={props.startValue >= props.maxValue || props.startValue < 0 ? styles.inpError : styles.inp} value={props.startValue} onChange={onChangeStartHandler} type="number" />

                   </div>
                </div>
                <div className={styles.buttons}>
                      {/*<button onClick={onClickHandler} className={styles.setButton} disabled={!props.editMode|| props.error } >Set</button> :*/}
                        <SuperButton className={styles.setButton} onClick={onClickHandler} name={'Set'} disabled ={disabledInc}/>
                </div>
            </div>
        </div>
    );
};

export default CounterSettings;