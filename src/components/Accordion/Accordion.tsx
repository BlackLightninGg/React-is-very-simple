import React from "react";

type AccordionPropsType = {
    title: string,
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion")
    return (
       <div> <TitleAccordion title={props.title}/>
           { props.collapsed && <BodyAccordion/>}

       </div>
)
}

type TitleAccordionPropsType = {
    title: string
}

function TitleAccordion(props: TitleAccordionPropsType) {
    console.log("TitleAccordion")
    return <h3>{props.title}</h3>
}

function BodyAccordion() {
    console.log("BodyAccordion")
    return (
        <>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </>
    )
        ;
}
