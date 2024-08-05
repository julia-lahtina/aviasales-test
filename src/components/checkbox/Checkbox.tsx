import { InputHTMLAttributes } from 'react'
import s from './Checkbox.module.scss'

type CheckboxProps = {
    title: string
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = (props: CheckboxProps) => {

    return (
        <div>
            <input onChange={() => alert('it works')} type="checkbox" />
            <span className={s.title}>{props.title}</span>
        </div>
    )
}