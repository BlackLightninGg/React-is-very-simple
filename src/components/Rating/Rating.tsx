import React from "react";

export type ValueStarType = 0 | 1 | 2 | 3 | 4 | 5

export type PropsType = {
    countStarSelected : ValueStarType
    setCountStarSelected: (number:ValueStarType) => void
}
export const Rating : React.FC<PropsType> = ({countStarSelected, setCountStarSelected}) => {




    return <div>
        <Star selected={countStarSelected > 0} setCountStarSelected={setCountStarSelected} number={1}/>
        {/*<button onClick={onclickButtonStarHandler}>1</button>*/}
        <Star selected={countStarSelected > 1} setCountStarSelected={setCountStarSelected} number={2}/>
        {/*<button onClick={onclickButtonStarHandler}>2</button>*/}
        <Star selected={countStarSelected > 2} setCountStarSelected={setCountStarSelected} number={3}/>
        {/*<button onClick={onclickButtonStarHandler}>3</button>*/}
        <Star selected={countStarSelected > 3} setCountStarSelected={setCountStarSelected} number={4}/>
        {/*<button onClick={onclickButtonStarHandler}>4</button>*/}
        <Star selected={countStarSelected > 4} setCountStarSelected={setCountStarSelected} number={5}/>
        {/*<button onClick={onclickButtonStarHandler}>5</button>*/}
    </div>
//----------------------------------------------------------Old syntax----------------------------------------------------------------
    // if (props.value === 1) {
    //     return (
    //
    //     );
    // }
    // if (props.value === 2) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     );
    // }
    // if (props.value === 3) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     );
    // }
    // if (props.value === 4) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //         </div>
    //     );
    // }
    // if (props.value === 5) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
}


type StarPropsType = {
    selected: boolean;
    setCountStarSelected: (value: ValueStarType) => void
    number: ValueStarType
}

const  Star : React.FC<StarPropsType> =({ selected, setCountStarSelected, number}) => {
    function onclickButtonStarHandler() {
        setCountStarSelected(number)
    }


    // return props.selected ? <span id={'spanStar'} onClick={onclickButtonStarHandler}><b>Star </b></span> : <span onClick={onclickButtonStarHandler}>Star </span>
    return <span onClick={onclickButtonStarHandler}>{selected ? <b>Star </b> : "Star "}</span>

//----------------------------------------------------------Old syntax----------------------------------------------------------------


    // if (props.selected) {
    //     return (
    //         <span><b>Star </b></span>
    //     )
    // } else {
    //     return (
    //         <span>Star </span>
    //     )
    // }
}