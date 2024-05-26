import {useState, useEffect} from 'react'
import { PostCard } from '../components'
import appwriteService from "../appwrite/config"
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPost([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []); 
    const userData = useSelector((state) => state.auth.userData);
    console.log(userData)
  return (
    <>
    {/* Add sliding carosouls with featured images and titles */}
    <div className='w-full p-8'>
            <div className="p-9 pt-6 pb-5 m-10">
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-full'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
    </div>
    </>
  )
}

export default Home