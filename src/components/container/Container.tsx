import { ReactNode } from 'react'
import s from './Container.module.scss'

type ContainerProps = {
    children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className={s.mainContainer}>{children}</div>
    )
}