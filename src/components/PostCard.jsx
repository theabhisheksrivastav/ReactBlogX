import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import { Card } from "flowbite-react";

function PostCard({$id, title, featuredImg}) {
  return (
    <Link to={`/post/${$id}`}>
      <Card
      className="max-w-sm"
      imgAlt={title}
      imgSrc={appwriteService.getFilePreview(featuredImg)}
      className="w-full object-contain"
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