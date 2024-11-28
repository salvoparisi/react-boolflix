import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <h2>BootFlix</h2>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/browse">Films</NavLink>
            </nav>
        </>
    )
}

export default Header