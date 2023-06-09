import React,{useEffect} from 'react' 
import { useAuth } from '@/context/authContext';
import {useRouter} from 'next/router';


const index = () => {
  const {signOut,currentUser,isLoading} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(!isLoading && !currentUser){
      router.push('/login')
    }
  },[isLoading,currentUser])
  return (
    <div >
      <button onClick={signOut}>Signout</button>
    </div>
  )
}

export default index