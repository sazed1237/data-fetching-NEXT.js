import Link from 'next/link';
import React from 'react';

const DetailsPage = async ({ params }) => {

    console.log(params.id)

    const res = await fetch(`http://localhost:5000/posts/${params.id}`);
    const post = await res.json();

    return (
        <div>
            <h1 className='text-center text-3xl text-orange-400'>this is Post Details Page</h1>

            <div key={post.id} className="card w-[70%] mx-auto my-5 bg-gray-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.description}</p>
                    <p className='mt-5 text-purple-500'>Total Likes: {post.likesCount}</p>
                    <div className="card-actions justify-end">
                        <Link href='/posts'>
                            <button className="btn btn-accent">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;