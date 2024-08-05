import { Button } from "./button/Button"
import s from './Buttons.module.scss'

export const Buttons = () => {
    return (
        <div className={s.buttonWrap}>
            <Button title="самый дешевый" />
            <Button title="самый быстрый" />
            <Button title="оптимальный" />
        </div>
    )
}