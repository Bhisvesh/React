import React from 'react'
import { useParams} from 'react-router';

const User = () => {
    const{userid} = useParams();
  return (
    <div className='bg-gray-600 p-4 text-white text-lg'>
      User: {userid}
    </div>
  )
}

export default User;
