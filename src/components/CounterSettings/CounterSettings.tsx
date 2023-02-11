import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import styles from './CounterSettings.module.css';

type CounterPropsType = {
    handlerInc: () => void
    handlerReset: () => void
    counter: number
    setSettings: (maxValue: number, startValue: number) => void
    maxValue: number
    startValue: number
    setMaxValue: Dispatch<SetStateAction<number>>
    setStartValue: Dispatch<SetStateAction<number>>
    setEditMode: Dispatch<SetStateAction<boolean>>
    editMode: boolean
    error: boolean
}

const CounterSettings = (props: CounterPropsType) => {



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

    return (
        <div className={styles.wrapper}>
            <div className={styles.counter}>
                <div className={styles.counterDisplay}>
                   <div className={styles.texts}>
                       <div className={styles.text}>max value:</div>
                       <div className={styles.text}>start value:</div>
                   </div>
                   <div className={styles.inputs}>
                       <input value={props.maxValue} onChange={onChangeMaxHandler} type="number" />
                       <input value={props.startValue} onChange={onChangeStartHandler} type="number" />

                   </div>
                </div>
                <div className={styles.buttons}>
                      <button onClick={onClickHandler} className={styles.setButton} disabled={!props.editMode|| props.error } >Set</button> :


                </div>
            </div>
        </div>
    );
};

export default CounterSettings;