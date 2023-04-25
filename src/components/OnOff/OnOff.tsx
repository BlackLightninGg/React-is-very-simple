import React from 'react';
import s from './OnOff.module.css'

type PropsType = {
    onOff: boolean
    setOnOFF: (onOff: boolean) => void
}
export const OnOff: React.FC<PropsType> = ({onOff, setOnOFF}) => {

    const onClickOnHandler = () => {
        setOnOFF(true)
    }
    const onClickOffHandler = () => {
        setOnOFF(false)
    }

    return (
        <div className={s.buttonSwitch}>
            {onOff && <div>
                <button onClick={onClickOnHandler} className={s.buttonOn}>On</button>
                <button onClick={onClickOffHandler} className={s.buttonInactive}>Off</button>
                <div className={s.circle + ' ' + s.on}></div>
            </div>}
            {!onOff && <div>
                <button onClick={onClickOnHandler} className={s.buttonInactive}>On</button>
                <button onClick={onClickOffHandler} className={s.buttonOff}>Off</button>
                <div className={s.circle + ' ' + s.off}></div>
            </div>}
        </div>
    );
};

export default OnOff;