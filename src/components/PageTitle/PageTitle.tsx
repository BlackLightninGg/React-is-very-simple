import React from "react";

type PageTitlePropsType = {
    title: string
}

export function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle")
    return (
        <h1>{props.title}</h1>
    );
}