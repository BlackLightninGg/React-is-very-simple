import React, {useState} from "react";

type AccordionPropsType = {
    title: string,
}

export function Accordion(props: AccordionPropsType) {

    const [collapsed,useCollapsed] = useState<boolean>(false)


    return (
       <div>
           <TitleAccordion title={props.title} collapsed={collapsed} useCollapsed={useCollapsed} />
           { collapsed && <BodyAccordion/>}
       </div>
)
}

type TitleAccordionPropsType = {
    title: string
    collapsed:boolean
    useCollapsed:(collapsed:boolean)=> void
}

function TitleAccordion(props: TitleAccordionPropsType) {
    const OnClickHandler = () => {
        props.useCollapsed(!props.collapsed)
    }
    return <h3 onClick={OnClickHandler}>{props.title}</h3>
}

function BodyAccordion() {
    return (
        <>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </>
    )
        ;
}
