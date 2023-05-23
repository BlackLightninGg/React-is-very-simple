import React from "react";

type ItemType = {
    title: string,
    value: any
}

export type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    useCollapsed: (collapsed: boolean) => void;
    items: ItemType[]
    callBack: (value: any) => void
};

export const Accordion: React.FC<AccordionPropsType> = ({
                                                            title,
                                                            collapsed,
                                                            useCollapsed,
                                                            items,
                                                            callBack,
                                                        }) => {
    return (
        <div>
            <TitleAccordion
                title={title}
                collapsed={collapsed}
                useCollapsed={useCollapsed}
            />
            {collapsed && <BodyAccordion items={items} callBack={callBack}/>}
        </div>
    );
};

type TitleAccordionPropsType = {
    title: string;
    collapsed: boolean;
    useCollapsed: (collapsed: boolean) => void;
};

const TitleAccordion: React.FC<TitleAccordionPropsType> = ({
                                                               title,
                                                               collapsed,
                                                               useCollapsed,
                                                           }) => {
    const OnClickHandler = () => {
        useCollapsed(!collapsed);
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
