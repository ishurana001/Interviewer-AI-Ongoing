"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

function Interview() {
  const {interviewId}=useParams();
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <div className='max-w-xl w-full'>
        <Image src={'/interview.jpg'} alt='interview'
        width={400}
        height={200}
        className='w-full h-[200px] object-center'
        />
        <div className='p-4 flex flex-col items-center space-y-5'>
            <h2 className=' font-bold text-1xl text-center'> Ready to Start Interview</h2>
            <p className='text-gray-500 text-centre'>
                The interview will be last 30 minutes.Are you readyto begin?
            </p>
            <Link href={'/interview/'+interviewId+'/start'}>
            <Button className='mt-5'>Start Interview <ArrowRight /></Button>
            </Link>
            
            <hr />

            <div className='p-4 bg-gray-50 rounded-2xl mt-5'>
            <h2 className='p-3 font-bold text-xl'>Want to sent interview link to someone?</h2>
            <div className='flex gap-5 w-full items-center max-w-xl'>
            <Input placeholder='Enter email address' className='w-full' />
            <Button><Send /></Button>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Interview