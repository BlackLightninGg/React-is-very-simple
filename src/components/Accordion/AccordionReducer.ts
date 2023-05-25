import {ToggleAccordionType} from "./Accordion";

type AccordionReducerType  = ToggleAccordionType;

export const AccordionReducer  = (state: boolean, action: AccordionReducerType) => {
    switch (action.type) {
        case  "TOGGLE-ACCORDION" : {
            return !state
        }
        default:
            return state;
    }
};