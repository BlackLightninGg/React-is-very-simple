import React, {useState} from 'react';
import s from './OnOff.module.css'


export const OnOff = () => {

    const [onOff, setOnOFF] = useState<boolean>(false)
    return (
        <div className={s.buttonSwitch}>
            {onOff && <div>
                <button onClick={()=>setOnOFF(true)} className={s.buttonOn}>On</button>
                <button onClick={()=>setOnOFF(false)} className={s.buttonInactive}>Off</button>
                <div className={s.circle + ' ' + s.on}></div>
            </div>}
            {!onOff && <div>
                <button onClick={()=>setOnOFF(true)} className={s.buttonInactive}>On</button>
                <button onClick={()=>setOnOFF(false)} className={s.buttonOff}>Off</button>
                <div className={s.circle + ' ' + s.off}></div>
                </div>}
        </div>
    );
};

export default OnOff;