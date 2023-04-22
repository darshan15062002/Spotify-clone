import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import '../Home/Home.scss'
import Podecast from '../../components/Podecast/Podecast'
import Play from '../../components/play/Play'
const Home = () => {
    return (
        <div className='home'>
            <div className="home__main">
                <Sidebar />
                <Podecast />
            </div>
            <Play />

        </div>
    )
}

export default Home