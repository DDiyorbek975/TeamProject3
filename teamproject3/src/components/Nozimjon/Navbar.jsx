import logo from './img/logo.png'
import './Navbar.css'

export default function Navbar() {
    return(
        <>
            <nav>
                <div className='flex br'><img src={ logo } alt='logo' className='brimg' /><p className='brname'>Amid.</p></div>
                <ul>
                    <li><a href="">About mind</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Reviews</a></li>
                </ul>
                <a className='brbtn'>Login</a>
            </nav>
        </>
    )
}
