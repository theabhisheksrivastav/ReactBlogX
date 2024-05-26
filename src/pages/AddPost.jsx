import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
          {/* disable submit button once pressed until res as multiple file uploaded also optimize image compress*/}
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost