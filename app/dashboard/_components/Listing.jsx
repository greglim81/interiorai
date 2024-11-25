"use client"
import { useUser} from '@clerk/clerk-react'
import React, {useState, useEffect} from 'react'
import EmptyState from './EmptyState'
import Link from 'next/link';
import { AiGeneratedImage } from '../../../config/schema';
import { db } from '../../../config/db';
import { desc, eq } from 'drizzle-orm';
import RoomDesignCard from './RoomDesignCard';
import AiOutputDialog from '../create-new/_components/AiOutputDialog'

function Listing() {

    const {user} = useUser();
    const [userRoomList, setUserRoomList] = useState([]);    
    const [openDialog,setOpenDialog]=useState(false);
    const [selectedRoom,setSelectedRoom]=useState()    

    useEffect(()=>{
        user&&GetUserRoomList();
    },[user])    

      const GetUserRoomList=async()=>{
        const result=await db.select().from(AiGeneratedImage)
        .where(eq(AiGeneratedImage.userEmail,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc( AiGeneratedImage.id))
        
        setUserRoomList(result);
        console.log(result);
    }      
      
  return (
    <div>
        <div className="flex justify-between items-center text-xl font-bold">        
            Hello, {user?.fullName}  
            <Link href={'/dashboard/create-new'}>
                <button className="btn btn-primary">+ Generate AI Interior</button>
            </Link>
        </div>
        {userRoomList?.length == 0 ?
            <EmptyState />
            :
            <div className="grid grid-cols-3 gap-4">

                {userRoomList.map((room,index)=>(
                    <div key={index} onClick={()=>{setOpenDialog(true);setSelectedRoom(room)}}>
                        <RoomDesignCard room={room}></RoomDesignCard>
                    </div>
                ))}                         
            </div>
        }
        <AiOutputDialog openDialog={openDialog} setOpenDialog={setOpenDialog} aiImage={selectedRoom?.aiImage} orgImage={selectedRoom?.orgImage} />                
    </div>
  )
}

export default Listing