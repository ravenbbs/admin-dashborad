import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  const { data: session } = useSession()
  if(!session){
    return (
      <div className='bg-blue-600 w-screen h-screen flex items-center'>
        <div className='text-center w-full'>
          <button onClick={ () => signIn('google')}  className='bg-white rounded-md px-4 py-2 font-semibold '>
            Ingresa Con Google 
          </button>
        </div>
      </div>
      
    )

  } else {
    return (
      <div className='bg-blue-800 w-screen h-screen flex items-center'>
        <div className='text-center w-full'>
          <button onClick={() => signOut()} className='bg-white rounded-md px-4 py-2 font-semibold '>
            Exito {session.user.email}
          </button>
        </div>
      </div>
      
    )
  }


}
