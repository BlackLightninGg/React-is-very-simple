import React, {useState} from "react";


export function Rating() {

    const [countStarSelected, setCountStarSelected] = useState<number>(0)



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
    setCountStarSelected: (text:number)=>void
    number:number
}

function Star(props: StarPropsType) {
    function onclickButtonStarHandler() {
        props.setCountStarSelected(props.number)
    }


    return props.selected ? <span id={'spanStar'} onClick={onclickButtonStarHandler}><b>Star </b></span> : <span onClick={onclickButtonStarHandler}>Star </span>

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