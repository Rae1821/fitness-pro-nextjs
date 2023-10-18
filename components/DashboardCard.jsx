'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const DashboardCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {

    //const [copied, setCopied] = useState('')
    const [liked, setLiked] = useState(false)

    const handleLikeClick = () => {
        setLiked(prevSetLiked => !prevSetLiked)
    }

  return (

    <div className="glassmorphism mx-4">
        <div className="container grid grid-cols-1 gap-10">
            <div className="grid grid-cols-7 gap-10">


                {/* <div className="copy_btn" onClick={() => {}}>
                    <Image
                        src={copied === exerciseRow
                        ? '/assets/icons/tick.svg'
                        : '/assets/icons/copy.svg'
                        }
                        alt="copy btn"
                        width={12}
                        height={12}
                    />
                </div> */}
                <div className="favorite-btn" onClick={handleLikeClick}>
                    <Image
                        src={liked ? '/assets/icons/star-filled.svg'
                        : '/assets/icons/star.svg'
                    }
                    alt="like btn"
                    width={40}
                    height={40}
                    />
                </div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-gray-900 text-sm">Tag:</p>
                        <p className="font-inter text-sm text-gray-500 w-32">#{post.tag}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-gray-900 text-sm">Date:</p>
                        <p className="font-inter text-sm text-gray-500 w-32"></p>
                    </div>
            </div>
            {post.map((row, index) => (
                <div key={index} className="grid grid-cols-7 gap-10">
                    <div className="flex flex-col">
                        <p className="font-semibold text-gray-900 text-sm">Exercise:</p>
                        <p className="font-inter text-sm text-gray-500 w-32">{row.exercise}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-gray-900 text-sm">Sets: </p>
                        <p className="font-inter text-sm text-gray-500">{row.reps}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-gray-900 text-sm">Reps: </p>
                        <p className="font-inter text-sm text-gray-500">{row.reps}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-gray-900 text-sm">Weight Set 1:</p>
                        <p className="font-inter text-sm text-gray-500">{row.weight1}lbs</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-gray-900 text-sm">Weight Set 2:</p>
                        <p className="font-inter text-sm text-gray-500 w-32">{row.weight2}lbs</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-gray-900 text-sm">Weight Set 3:</p>
                        <p className="font-inter text-sm text-gray-500 w-32">{row.weight3}lbs</p>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default DashboardCard
