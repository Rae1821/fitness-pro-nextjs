'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const DashboardCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {

    const [copied, setCopied] = useState('')

  return (
    <div className="flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter md:w-[360px] w-full h-fit">
        <div className="flex justify-between items-start gap-5">
            <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                <Image
                    src={post.creator.image}
                    alt="user_image"
                    width={40}
                    height={40}
                    className="rounded-full object-contain"
                />
                <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-900">{post.creator.username}</h3>
                    <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
                </div>

                <div className="copy_btn" onClick={() => {}}>
                    <Image
                        src={copied === post.workout
                        ? '/assets/icons/tick.svg'
                        : '/assets/icons/copy.svg'
                        }
                        alt="copy btn"
                        width={12}
                        height={12}
                    />
                </div>
            </div>
            <div className="flex flex-col">
                    <p className=" text-sm text-gray-700">{post.focus}</p>

                </div>
        </div>
    </div>
  )
}

export default DashboardCard
