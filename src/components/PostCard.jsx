import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import { Card } from "flowbite-react";

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        {/* <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div> */}
    <Card
      className="max-w-sm"
      imgAlt={title}
      imgSrc={appwriteService.getFilePreview(featuredImage)}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Tap to read full post
      </p>
    </Card>
    </Link>
  )
}

export default PostCard