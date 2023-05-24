import type {Meta} from '@storybook/react';
import {MySelect} from "./MySelect";
import {useState} from "react";

const meta: Meta<typeof MySelect> = {
    title: "MySelect",
    component: MySelect,
    tags: ['autodocs'],
};

export default meta;

const CreateMySelect = () => {
    const [value, setValue] = useState<any>("1")
    return <MySelect value={value} onClick={setValue}
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
    return <MySelect value={value} onClick={setValue}
                     items={[{title: "Astana", value: "1"}, {title: "Baku", value: "2"}, {
                         title: "London",
                         value: "3"
                     }]}/>
};

export const WithoutValue = {
    render: () => <CreateMySelect2/>,
};