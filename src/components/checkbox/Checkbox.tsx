import { InputHTMLAttributes } from 'react'
import s from './Checkbox.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { setCheckedStatus, sort } from '../../features/ticketsSlice'


type CheckboxProps = {
    title: sort
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = (props: CheckboxProps) => {
    const tickets = useSelector((state: RootState) => state.tickets)
    const dispatch = useDispatch()

    return (
        <div>
            <input checked={props.title === tickets.sortType} onChange={() => dispatch(setCheckedStatus(props.title))} type="checkbox" />
            <span className={s.title}>{props.title}</span>
        </div>
    )
}