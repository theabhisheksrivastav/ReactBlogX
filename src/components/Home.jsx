import React from 'react'
import { Carousel, Blockquote } from "flowbite-react";
import AllPosts from '../pages/AllPosts';

function Home() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 text-center">
       <Carousel indicators={false} leftControl=" " rightControl=" " slideInterval={5000}>
            <Blockquote className="bg-[url('https://cdn.pixabay.com/photo/2023/01/13/14/58/snake-7716269_1280.jpg')] bg-cover min-h-full">
                "Celebrating Completion of Backend Development Course with Twitube Backend Project!"
            </Blockquote>
            <Blockquote className="bg-[url('https://cdn.pixabay.com/photo/2023/01/13/14/58/snake-7716269_1280.jpg')] bg-cover min-h-full">
                "Embarking on the React Journey: Day 1 Chronicles!"
            </Blockquote>
            <Blockquote className="bg-[url('https://cdn.pixabay.com/photo/2023/01/13/14/58/snake-7716269_1280.jpg')] bg-cover min-h-full">
                "Mastering Redux: A Comprehensive Guide for Beginners!"
            </Blockquote>
            <Blockquote className="bg-[url('https://cdn.pixabay.com/photo/2023/01/13/14/58/snake-7716269_1280.jpg')] bg-cover min-h-full">
                "Introducing Flowbite: A Tailwind CSS Component Library!"
            </Blockquote>
        </Carousel>
        <AllPosts/>
    </div>
  )
}

export default Home