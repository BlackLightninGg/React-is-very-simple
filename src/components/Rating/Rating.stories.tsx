import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Rating, ValueStarType} from "./Rating";

export default {
    title: "Rating",
    component: Rating,
};

const callBack = action("star has been chosen")

export const EmptyStars = () => <Rating countStarSelected={0} setCountStarSelected={callBack}/>;
export const Rating1 = () => <Rating countStarSelected={1} setCountStarSelected={callBack}/>;
export const Rating2 = () => <Rating countStarSelected={2} setCountStarSelected={callBack}/>;
export const Rating3 = () => <Rating countStarSelected={3} setCountStarSelected={callBack}/>;
export const Rating4 = () => <Rating countStarSelected={4} setCountStarSelected={callBack}/>;
export const Rating5 = () => <Rating countStarSelected={5} setCountStarSelected={callBack}/>;
export const ChangeRating = () => {
    const [rating, setRating] = useState<ValueStarType>(3);
    return <Rating countStarSelected={rating} setCountStarSelected={setRating}/>
};
