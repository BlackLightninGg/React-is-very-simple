import React from 'react';
import s from './OnOff.module.css'

type onOffPropsType = {
    on: boolean
}
export const OnOff = (props: onOffPropsType) => {

    return (
        <div className={s.buttonSwitch}>
            {props.on && <div>
                <button className={s.buttonOn}>On</button>
                <button className={s.buttonInactive}>Off</button>
                <div className={s.circle + ' ' + s.on}></div>
            </div>}
            {!props.on && <div>
                <button className={s.buttonInactive}>On</button>
                <button className={s.buttonOff}>Off</button>
                <div className={s.circle + ' ' + s.off}></div>
                </div>}

        </div>
    );
};

export default OnOff;