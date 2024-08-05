import { ButtonHTMLAttributes } from 'react'
import s from './Button.module.scss'

type ButtonProps = {
    title: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
    return (
        <button className={s.button}>{props.title}</button>
    )
}