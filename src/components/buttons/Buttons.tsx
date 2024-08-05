import { Button } from "./button/Button"
import s from './Buttons.module.scss'

export const Buttons = () => {
    return (
        <div className={s.buttonWrap}>
            <Button title="САМЫЙ ДЕШЕВЫЙ" />
            <Button title="САМЫЙ БЫСТРЫЙ" />
            <Button title="ОПТИМАЛЬНЫЙ" />
        </div>
    )
}