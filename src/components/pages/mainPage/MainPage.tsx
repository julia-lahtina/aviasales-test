import { Link } from "react-router-dom"

export const MainPage = () => {
    return (
        <div style={{ margin: '20px 0 0 20px' }}>
            <Link style={{ textDecoration: 'none' }} to="/">back</Link>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                <img src="https://t3.ftcdn.net/jpg/00/84/92/06/360_F_84920643_7xPuxWKOpLHaXd5khhFlMD0KEzTrX2EV.jpg" alt="main" />
            </div>
        </div>
    )
}