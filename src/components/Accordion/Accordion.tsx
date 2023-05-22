import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    useCollapsed: (collapsed: boolean) => void
}

export const Accordion: React.FC<AccordionPropsType> = ({title, collapsed, useCollapsed}) => {

    return (
        <div>
            <TitleAccordion title={title} collapsed={collapsed} useCollapsed={useCollapsed}/>
            {!collapsed && <BodyAccordion/>}
        </div>
    )
}

type TitleAccordionPropsType = {
    title: string
    collapsed: boolean
    useCollapsed: (collapsed: boolean) => void
}

const TitleAccordion: React.FC<TitleAccordionPropsType> = ({title, collapsed, useCollapsed}) => {
    const OnClickHandler = () => {
        useCollapsed(!collapsed)
    }
    return <h3 onClick={OnClickHandler}>{title}</h3>
}

function BodyAccordion() {
    return (
        <>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </>
    )
}
