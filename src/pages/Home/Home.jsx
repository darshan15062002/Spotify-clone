import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import '../Home/Home.scss'
import Podecast from '../../components/Podecast/Podecast'
import Play from '../../components/play/Play'
import { db } from "../../firebase";
import { collection, collectionGroup, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { SearchContext } from '../../context/SearchContext'



const podcasts = [
    {
        _id: 1,
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzaR0qzqsdEOASSWcp4cU4kIyYm66HfYdhyVTnYgkF2rfZoC8",
        name: "The Example Podcast",
        description: "A podcast about examples",
        category: "Education",
        audioFile: "https://samplelib.com/lib/preview/mp3/sample-15s.mp3",
        artistName: "John Doe",
        artistImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
    },
    {
        _id: 2,
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSSnxZB6Rsy7G_nfPokcO7MgSKtZt_kIeE6dK3MlfydQw5Qw-U",
        name: "The Other Example Podcast",
        description: "A podcast about other examples",
        category: "Education",
        audioFile: "https://example.com/podcast2.mp3",
        artistName: "Jane Smith",
        artistImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
    },
    {
        _id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXa01mKYs6KrrwaaIQcIMcU8MagIvLLTRfXxZsOrxRMJ30pw",
        name: "The Cool Podcast",
        description: "A podcast about cool things",
        category: "Entertainment",
        audioFile: "https://example.com/podcast3.mp3",
        artistName: "Bob Johnson",
        artistImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
    },
    {
        _id: 4,
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzaR0qzqsdEOASSWcp4cU4kIyYm66HfYdhyVTnYgkF2rfZoC8",
        name: "The Example Podcast",
        description: "A podcast about examples",
        category: "Education",
        audioFile: "https://example.com/podcast1.mp3",
        artistName: "John Doe",
        artistImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
    },
    {
        _id: 5,
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzaR0qzqsdEOASSWcp4cU4kIyYm66HfYdhyVTnYgkF2rfZoC8",
        name: "The Example Podcast",
        description: "A podcast about examples",
        category: "Education",
        audioFile: "https://example.com/podcast1.mp3",
        artistName: "John Doe",
        artistImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
    },
    {
        _id: 6,
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzaR0qzqsdEOASSWcp4cU4kIyYm66HfYdhyVTnYgkF2rfZoC8",
        name: "The Example Podcast",
        description: "A podcast about examples",
        category: "Education",
        audioFile: "https://example.com/podcast1.mp3",
        artistName: "John Doe",
        artistImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
    },
    {
        _id: 7,
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzaR0qzqsdEOASSWcp4cU4kIyYm66HfYdhyVTnYgkF2rfZoC8",
        name: "The Example Podcast",
        description: "A podcast about examples",
        category: "Education",
        audioFile: "https://example.com/podcast1.mp3",
        artistName: "John Doe",
        artistImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
    },
    {
        _id: 8,
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzaR0qzqsdEOASSWcp4cU4kIyYm66HfYdhyVTnYgkF2rfZoC8",
        name: "The Example Podcast",
        description: "A podcast about examples",
        category: "Education",
        audioFile: "https://samplelib.com/lib/preview/mp3/sample-9s.mp3",
        artistName: "John Doe",
        artistImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
    },
]
const Home = () => {
    const [pod, setPod] = useState()
    const [filterdata, setFilterData] = useState([])
    const [services, setServices] = useState([])
    const { search, setSearch } = useContext(SearchContext);
    console.log(search);

    useEffect(() => {
        const handleSubmit = async () => {


            setServices(filterdata.filter((doc) => {
                return doc.pname?.toLowerCase() === search?.toLowerCase();
                // comparing category for displaying data
            }))


        }
        search && handleSubmit()
    }, [search])





    useEffect(() => {
        const getServices = async () => {
            const q = query(collection(db, "podcast"));

            const querySnapshot = await getDocs(q);

            var userDocs = [];
            querySnapshot.forEach((doc) => {


                userDocs.push(doc.data().podcast);


                // array of documents for all users

            })
            console.log(userDocs.flat());
            setFilterData(userDocs.flat())





            return () => {
                querySnapshot()
            }
        }
        getServices()

    }, [])



    return (
        <div className='home'>
            <div className="home__main">
                <Sidebar />
                <Podecast setPod={setPod} podcasts={podcasts} filterdata={services.length === 0 ? filterdata : services} />
            </div>

            {pod && <Play pod={pod} />}

        </div>
    )
}

export default Home