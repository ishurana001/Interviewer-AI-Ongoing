import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className='flex items-center justify-center min-h-screen w-full bg-slate-50'>
            <SignUp />
        </div>
    )
}