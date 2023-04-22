import React from 'react'
import './Podecast.scss'
import { AiFillPlayCircle } from 'react-icons/ai';
const podcasts = [
    {
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzaR0qzqsdEOASSWcp4cU4kIyYm66HfYdhyVTnYgkF2rfZoC8",
        name: "The Example Podcast",
        description: "A podcast about examples",
        category: "Education",
        audioFile: "https://example.com/podcast1.mp3",
        artistName: "John Doe",
        artistImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
    },
    {
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSSnxZB6Rsy7G_nfPokcO7MgSKtZt_kIeE6dK3MlfydQw5Qw-U",
        name: "The Other Example Podcast",
        description: "A podcast about other examples",
        category: "Education",
        audioFile: "https://example.com/podcast2.mp3",
        artistName: "Jane Smith",
        artistImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXa01mKYs6KrrwaaIQcIMcU8MagIvLLTRfXxZsOrxRMJ30pw",
        name: "The Cool Podcast",
        description: "A podcast about cool things",
        category: "Entertainment",
        audioFile: "https://example.com/podcast3.mp3",
        artistName: "Bob Johnson",
        artistImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
    }]

const Podecast = () => {

    const handlePlay = (id) => {

    }
    return (
        <div className='podecast'>
            <h1>Most Popular</h1>
            <div className="podecast__Container">


                {podcasts.map((item, index) => (
                    <div className="podecast__Card" key={item.description}>
                        <AiFillPlayCircle className='podecast__Card--play' size={50} onClick={handlePlay(item.name)} />
                        <img src={item.image} alt="" />
                        <div className="podecast__Card--info">
                            <h3>{item.name}</h3>
                            <div className="podecast__Card--artist">
                                <img src={item.artistImage} alt="" />
                                <span>{item.artistName}</span>
                            </div>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Podecast