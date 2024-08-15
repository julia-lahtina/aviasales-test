import { ButtonHTMLAttributes } from 'react'
import s from './Button.module.scss'


type ButtonProps = {
    title: string
    onClick: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {

    return (
        <button className={s.button} onClick={props.onClick}>{props.title}</button>
    )
}