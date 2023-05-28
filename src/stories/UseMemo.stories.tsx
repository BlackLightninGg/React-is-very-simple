import React, {useMemo, useState} from "react";

export default {
    title: "UseMemo",
}

export const UseMemo = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResulA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResulA *= i

        }
        return tempResulA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            {resultA}
        </div>
        <div>
            {resultB}
        </div>


    </>
}

const Users = (props: { users: Array<string> }) => {
    console.log("Users appears")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const UsersHOC = React.memo(Users)

export const UseMemoWithReactMemo = () => {
    console.log("ReactuseMemoWithReactMemo")
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(["Kaya", "Katya", "Karina"])

    const filteredUsers = useMemo(() => {
       return  users.filter(u => u.toLowerCase().indexOf("y") > -1)
    }, [users])

    const addUser = () => {
        setUsers([...users, "Mariya"])
    }
    return <>

        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>+</button>
        {counter}
        <UsersHOC users={filteredUsers}/>
    </>
}