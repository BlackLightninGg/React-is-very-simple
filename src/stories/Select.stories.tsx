import {useState} from "react";

const meta = {
    title: "Select",
    tags: ['autodocs'],
};

export default meta;

const CreateSelect = () => {
    const [value, setValue] = useState<string | undefined>(undefined)
    return <select value={value} onChange={(e) => setValue(e.currentTarget.value)}>
        <option>None</option>
        <option value={"1"}>L</option>
        <option value={"2"}>I</option>
        <option value={"3"}>K</option>
        <option value={"4"}>E</option>
    </select>
};

export const Select = {
    render: () => <CreateSelect/>,
};

