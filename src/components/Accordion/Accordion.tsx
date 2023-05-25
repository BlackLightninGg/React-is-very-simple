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

export const Accordion: React.FC<AccordionPropsType> = ({
                                                            title,
                                                            collapsed,
                                                            dispatchCollapsed,
                                                            items,
                                                            callBack,
                                                        }) => {
    return (
        <div>
            <TitleAccordion
                title={title}
                dispatchCollapsed={dispatchCollapsed}
            />
            {collapsed && <BodyAccordion items={items} callBack={callBack}/>}
        </div>
    );
};

type TitleAccordionPropsType = {
    title: string;
    dispatchCollapsed: (t: ToggleAccordionType) => void;
};

const TitleAccordion: React.FC<TitleAccordionPropsType> = ({
                                                               title,
                                                               dispatchCollapsed,
                                                           }) => {
    const OnClickHandler = () => {
        dispatchCollapsed({type: "TOGGLE-ACCORDION"});
    };
    return <h3 onClick={OnClickHandler}>{title}</h3>;
};

type BodyAccordion = {
    items: ItemType[]
    callBack: (value: any) => void
}

const BodyAccordion: React.FC<BodyAccordion> = ({items, callBack}) => {
    return (
        <>
            {items.map((el, index) => <li onClick={() => callBack(el.value)} key={index}>{el.title}</li>)}
        </>
    );
}
