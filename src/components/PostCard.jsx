import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import { Card } from "flowbite-react";

function PostCard({$id, title, featuredImg}) {
  return (
    <Link to={`/post/${$id}`}>
      <Card
      className="grid grid-cols-2 object-contain"
      imgAlt={title}
      imgSrc={appwriteService.getFilePreview(featuredImg)}
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