import React, { useContext, useState } from 'react'
import logo from '../../img/image-PhotoRoom.png-PhotoRoom.png'
import '../navbar/Navbar.scss'
import search from '../../img/search.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth, db } from '../../firebase'
import { doc, onSnapshot, query } from 'firebase/firestore'
import { SearchContext } from '../../context/SearchContext'
import { loginUrl } from '../../spotify'
import { useStateValue } from '../../StateProvider'
const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const { search, setSearch } = useContext(SearchContext);
    const [query, setQuery] = useState('')

    const [{ user }, dispatch] = useStateValue();
    console.log("here is  user", user);




    return (
        <div className='navbar'>
            <div className="navbar-Container">
                <div className="navbar-Left">
                    <img src={logo} alt="" />
                    <span>ZED Talks</span>
                </div>
                <div className="navbar-Middle">
                    <img src={search} alt="" />
                    <input maxlength="800" placeholder="What do you want to listen to?" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => setSearch(e.target.value)} />
                </div>
                {user ? (
                    <div className="user" >
                        <img src={user?.images[0] ? user?.images[0].url : null} alt="" />
                        <span>{user?.display_name}</span>
                        {/* {menu && <div className="options">

                            {user?.isAdmin && <Link className="link" to="/addpodcast">
                                Add Podcast
                            </Link>}
                            <p className="link" to="/">
                                <button onClick={() => signOut(auth)}>Logout</button>

                            </p>
                        </div>} */}
                    </div>) : (<div className="navbar-Right">
                        <a href={loginUrl} className='navbar-Login'><span>Log In</span></a>
                    </div>)}
            </div>
        </div>
    )
}

export default Navbar