import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className='container navbar'>
            <Link to='/'>Home</Link>
            <nav className='nav-links'>
                <Link to='/players'>Players</Link>
                <Link to='/teams'>Teams</Link>
            </nav>
        </nav>
    )
}