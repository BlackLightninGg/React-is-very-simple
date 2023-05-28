import React, {useMemo, useState} from "react";

const meta = {
    title: "Select cities",
    tags: ['autodocs'],
};

export default meta;

type CitiesType = {
    id: number, countyId: number, title: string, population: number
}

type CitiesPropsType = {
    filteredCities: CitiesType[]
    title: string
}


export const SelectCities = () => {
    const [cities, setCities]  = useState<CitiesType[]>([
            {id: 1, countyId: 1, title: "Astana", population: 1212077},
            {id: 2, countyId: 2, title: "Moscow", population: 13104177},
            {id: 3, countyId: 3, title: "Minsk", population: 1995471},
            {id: 4, countyId: 1, title: "Almaty", population: 2175100},
            {id: 5, countyId: 1, title: "Ust-Kamenogorsk", population: 336230},
        ]
    )

    const [counter, setCounter] = useState<number>(0)

    const Counter = () => {
        console.log("Counter")
        return <div>{counter}</div>
    }


    const Cities = ({filteredCities, title}: CitiesPropsType) => {
        const [value, setValue] = useState<number>(0)

        return <div>
            <span>{title}</span>
            <select value={value} onChange={(e) => setValue(+e.currentTarget.value)}>
                <option>None</option>
                {filteredCities.map(el => <option key={el.id} value={el.id}>{el.title}</option>)}
            </select>
        </div>

    }


    const FilteredCitiesByLetter = useMemo(() => {
        console.log("FilteredCitiesByLetter")

        return cities.filter(u => u.title.toLowerCase().indexOf("m") > -1)
    }, [cities])


    const FilteredCitiesByCountry = useMemo(() => {
        console.log("FilteredCitiesByCountry")

        return cities.filter(u => u.countyId === 1)
    }, [cities])


    const FilteredCitiesByPopulationOverTwoMillion = useMemo(() => {
        console.log("FilteredCitiesByPopulationOverTwoMillion")

        return cities.filter(u => u.population > 2000000)
    }, [cities])


    const CounterReactMemo = React.memo(Counter)
    const CitiesReactMemo = React.memo(Cities)


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <CounterReactMemo/>

        <CitiesReactMemo filteredCities={FilteredCitiesByLetter} title={"Filtered cities containing the letter m: "}/>
        <CitiesReactMemo filteredCities={FilteredCitiesByCountry} title={"Filtered cities by country Kazakhstan: "}/>
        <CitiesReactMemo filteredCities={FilteredCitiesByPopulationOverTwoMillion}
                         title={"Filtered cities by population over 2000000: "}/>
    </>

}








