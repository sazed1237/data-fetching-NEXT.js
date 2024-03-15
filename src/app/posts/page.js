import Link from 'next/link';
import React from 'react';

const PostsPage = async () => {

    const res = await fetch('http://localhost:5000/posts', {
        // next: {
        //     revalidate: 5
        // }
        cache: 'no-store'
    })
    const posts = await res.json()
    console.log(posts)

    return (
        <div className='w-full'>
            <h1 className='text-3xl text-center text-purple-500'>All Post Here: {posts.length}</h1>


            {
                posts.map(post => <div key={post.id} className="card w-[70%] mx-auto my-5 bg-gray-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.description}</p>
                        <p className='mt-5 text-purple-500'>Total Likes: {post.likesCount}</p>
                        <div className="card-actions justify-end">
                            <Link href={`/posts/${post.id}`}>
                                <button className="btn btn-primary">See More</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default PostsPage;