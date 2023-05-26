import React from "react";

type ItemType = {
    title: string,
    value: any
}

export type ToggleAccordionType = {
    type: "TOGGLE-ACCORDION"
}

export type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    dispatchCollapsed: (t: ToggleAccordionType) => void;
    items: ItemType[]
    callBack: (e: any) => void
};

 const Accordion = ({
    title,
    collapsed,
    dispatchCollapsed,
    items,
    callBack,
} : AccordionPropsType) => {
    return (
        <div>
            <TitleAccordionMemo
                title={title}
                dispatchCollapsed={dispatchCollapsed}
            />
            {collapsed && <BodyAccordionMemo items={items} callBack={callBack} />}
        </div>
    );
};

export const AccordionMemo = React.memo(Accordion)

type TitleAccordionPropsType = {
    title: string;
    dispatchCollapsed: (t: ToggleAccordionType) => void;
};

const TitleAccordion= ({
    title,
    dispatchCollapsed,
} : TitleAccordionPropsType) => {
    const OnClickHandler = () => {
        dispatchCollapsed({ type: "TOGGLE-ACCORDION" });
    };
    return <h3 onClick={OnClickHandler}>{title}</h3>;
};

const TitleAccordionMemo = React.memo(TitleAccordion)


type BodyAccordion = {
    items: ItemType[]
    callBack: (value: any) => void
}

const BodyAccordion = ({ items, callBack } : BodyAccordion) => {
    return (
        <>
            {items.map((el, index) => <li onClick={() => callBack(el.value)} key={index}>{el.title}</li>)}
        </>
    );
}
const BodyAccordionMemo = React.memo(BodyAccordion)
