import React, {useState} from "react";

export default {
    title: "React.memo",
}


const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const Users = (props: { users: Array<string> }) => {
    console.log("Users appears")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const UsersHOC = React.memo(Users)

export const Example1 = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(["Kaya", "Katya", "Karina"])
    const addUser = () => {
        setUsers([...users, "Klara"])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        <Counter count={counter}/>
        <UsersHOC users={users}/>
    </>
}