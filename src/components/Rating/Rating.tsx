import React from "react";

export type ValueStarType = 0 | 1 | 2 | 3 | 4 | 5

type PropsType = {
    countStarSelected : ValueStarType
    setCountStarSelected: (number:ValueStarType) => void
}


const Rating : React.FC<PropsType> = ({countStarSelected, setCountStarSelected}) => {
    return <div>
        <StarMemo selected={countStarSelected > 0} setCountStarSelected={setCountStarSelected} number={1}/>
        <StarMemo selected={countStarSelected > 1} setCountStarSelected={setCountStarSelected} number={2}/>
        <StarMemo selected={countStarSelected > 2} setCountStarSelected={setCountStarSelected} number={3}/>
        <StarMemo selected={countStarSelected > 3} setCountStarSelected={setCountStarSelected} number={4}/>
        <StarMemo selected={countStarSelected > 4} setCountStarSelected={setCountStarSelected} number={5}/>
    </div>

}

export const RatingMemo = React.memo(Rating)


type StarPropsType = {
    selected: boolean;
    setCountStarSelected: (value: ValueStarType) => void
    number: ValueStarType
}

const  Star : React.FC<StarPropsType> =({ selected, setCountStarSelected, number}) => {
    function onclickButtonStarHandler() {
        setCountStarSelected(number)
    }

    return <span onClick={onclickButtonStarHandler}>{selected ? <b>Star </b> : "Star "}</span>
}

const StarMemo = React.memo(Star)