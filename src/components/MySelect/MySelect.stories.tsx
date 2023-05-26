import type {Meta} from '@storybook/react';
import {MySelectMemo} from "./MySelect";
import {useState} from "react";

const meta: Meta<typeof MySelectMemo> = {
    title: "MySelect",
    component: MySelectMemo,
    tags: ['autodocs'],
};

export default meta;

const CreateMySelect = () => {
    const [value, setValue] = useState<any>("1")
    return <MySelectMemo value={value} onClick={setValue}
                     items={[{title: "Astana", value: "1"}, {title: "Baku", value: "2"}, {
                         title: "London",
                         value: "3"
                     }]}/>
};

export const WithValue = {
    render: () => <CreateMySelect/>,
};

const CreateMySelect2 = () => {
    const [value, setValue] = useState<any>(null)
    return <MySelectMemo value={value} onClick={setValue}
                     items={[{title: "Astana", value: "1"}, {title: "Baku", value: "2"}, {
                         title: "London",
                         value: "3"
                     }]}/>
};

export const WithoutValue = {
    render: () => <CreateMySelect2/>,
};