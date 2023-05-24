import React from "react";

export type ItemType = {
  title: string;
  value: any;
};

export type MySelectPropsType = {
  value?: any;
  onClick: (value: any) => void;
  items: ItemType[];
};

export const MySelect = (props: MySelectPropsType) => {
  const a = props.items.filter((i) => i.value === props.value);
  return (
    <div>
      <h3>{props.value ? a[0].title : ""}</h3>
      <br />
      {props.items.map((i) => (
        <div key={i.value} onClick={() => props.onClick(i.value)}>
          {i.title}
        </div>
      ))}
    </div>
  );
};
