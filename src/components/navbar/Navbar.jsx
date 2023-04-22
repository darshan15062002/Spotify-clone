import React, { useContext, useState } from 'react'
import logo from '../../img/image-PhotoRoom.png-PhotoRoom.png'
import '../navbar/Navbar.scss'
import search from '../../img/search.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
const Navbar = () => {
    const [query, setQuery] = useState('')
    const [menu, setMenu] = useState(false)
    const { currentUser } = useContext(AuthContext)
    console.log(currentUser);
    const handleManu = () => {
        setMenu(!menu)
    }



    return (
        <div className='navbar'>
            <div className="navbar-Container">
                <div className="navbar-Left">
                    <img src={logo} alt="" />
                    <span>ZED Talks</span>
                </div>
                <div className="navbar-Middle">
                    <img src={search} alt="" />
                    <input maxlength="800" placeholder="What do you want to listen to?" value={query} />
                </div>
                {currentUser ? (
                    <div className="user" onClick={handleManu}>
                        <img src={currentUser.photoURL} alt="" />
                        <span>{currentUser?.displayName}</span>
                        {menu && <div className="options">

                            <Link className="link" to="/chating">
                                Messages
                            </Link>
                            <p className="link" to="/">
                                <button onClick={() => signOut(auth)}>Logout</button>

                            </p>
                        </div>}
                    </div>) : (<div className="navbar-Right">
                        <Link to={'/register'} className='navbar_Signup'><span>Sign Up</span></Link>
                        <Link to={'/login'} className='navbar-Login'><span>Log in</span></Link>
                    </div>)}
            </div>
        </div>
    )
}

export default Navbar