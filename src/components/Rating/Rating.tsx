import React, {useState, MouseEvent} from "react";



export function Rating() {

    const [countStarSelected,setCountStarSelected] = useState<number|string>(0)

    function onclickButtonStarHandler(e:MouseEvent<HTMLButtonElement>){
        setCountStarSelected(e.currentTarget.innerHTML)
    }

    return  <div>
        <Star selected={countStarSelected > 0}/><button onClick={onclickButtonStarHandler}>1</button>
        <Star selected={countStarSelected > 1}/><button onClick={onclickButtonStarHandler}>2</button>
        <Star selected={countStarSelected > 2}/><button onClick={onclickButtonStarHandler}>3</button>
        <Star selected={countStarSelected > 3}/><button onClick={onclickButtonStarHandler}>4</button>
        <Star selected={countStarSelected > 4}/><button onClick={onclickButtonStarHandler}>5</button>
    </div>

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
}
function Star(props: StarPropsType) {

    if (props.selected) {
        return (
            <span><b>Star </b></span>
        )
    } else {
        return (
            <span>Star </span>
        )
    }
}