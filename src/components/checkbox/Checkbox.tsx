import { InputHTMLAttributes, useState } from "react"
import { useDispatch } from "react-redux"
import { filterTickets } from "../../store/ticketsSlice"


export type filters = '1 пересадка' | '2 пересадки' | '3 пересадки' | 'Без пересадок' | 'Все'


type Checkbox = {
    title: string
    value: filters
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({ title, ...rest }: Checkbox) => {

    const [selectedFilters, setSelectedFilters] = useState<filters[]>([]);
    const dispatch = useDispatch()


    const handleChange = () => {

        if (selectedFilters.includes(rest.value)) {
            setSelectedFilters(selectedFilters.filter(filter => filter !== rest.value));
        } else {
            setSelectedFilters([...selectedFilters, rest.value]);
        }

        if (rest.value === '1 пересадка') {
            dispatch(filterTickets(1))
        } else if (rest.value === '2 пересадки') {
            dispatch(filterTickets(2))
        } else if (rest.value === '3 пересадки') {
            dispatch(filterTickets(3))
        } else if (rest.value === 'Без пересадок') {
            dispatch(filterTickets(0))
        } else if (rest.value === 'Все') {
            dispatch(filterTickets('all'))
        }
    }

    return (
        <div>
            <input
                type="checkbox"
                value={rest.value}
                checked={selectedFilters.includes(rest.value)}
                onChange={handleChange}
            /> {title}
        </div>
    )
}