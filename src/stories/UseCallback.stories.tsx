import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "UseCallback",
}


export const UseCallback = () => {
    console.log("UseCallback")
    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<Array<string>>(["Robinson Crusoe", "Gulliver's Travels", "The Picture of Dorian Grey"])

    const filteredBook = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf("y") > -1)
    }, [books])


    const memoizedAddBook = useMemo(() => {
        console.log("Book added")
        return () => {
            setBooks([...books, "The Great Gatsby" + new Date().getMinutes()])
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        console.log("Book added")
        setBooks([...books, "The Great Gatsby" + new Date().getMinutes()])
    }, [books])

    const Books = (props: { books: Array<string> }) => {
        console.log("Books appears")
        return <div>
            <button onClick={memoizedAddBook2}>add book</button>
            {props.books.map((b, i) => <div key={i}>{b}</div>)}
        </div>
    }
    const BooksHOC = React.memo(Books)

    return <>

        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <BooksHOC books={filteredBook}/>
    </>
}
