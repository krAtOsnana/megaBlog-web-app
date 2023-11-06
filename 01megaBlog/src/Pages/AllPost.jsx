import React, {useState, useEffect} from 'react'
import { PostCard, Container } from '../components'
import appWriteServise from '../appWrite/config'




function AllPost() {

    const [posts, setPost] = useState([])
    useEffect(() => {
        appWriteServise.getPosts([]).then((posts) => {
            if(posts){
                setPost(posts.documents)
            }
        })
    } , [])


  return (
    <div className='w-full py-8'>
    <Container>
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post} />
                </div>
            ))}
        </div>
        </Container>
</div>
  )
}

export default AllPost