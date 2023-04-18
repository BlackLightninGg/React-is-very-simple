import React, {useState} from "react";

type AccordionPropsType = {
    title: string,
}

export function Accordion(props: AccordionPropsType) {

    const [collapsed,useCollapsed] = useState<boolean>(false)
    const OnClickHandler = () => {
        useCollapsed(!collapsed)
    }

    return (
       <div> <span>
           <TitleAccordion title={props.title}/>
           <button onClick={OnClickHandler}>Toggle</button>
           </span>
           { collapsed && <BodyAccordion/>}
       </div>
)
}

type TitleAccordionPropsType = {
    title: string
}

function TitleAccordion(props: TitleAccordionPropsType) {
    return <h3>{props.title}</h3>
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
