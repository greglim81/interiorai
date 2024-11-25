"use client"
import React, { useContext } from 'react'

import { UserButton } from '@clerk/nextjs'
import { UserDetailContext } from '../../_context/UserDetailContext'
import Link from 'next/link'



function Header() {
  const {userDetail,setUserDetail}=useContext(UserDetailContext);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/dashboard" className="btn btn-ghost text-xl">
          Interior AI
        </Link>      
      </div>     
      <div className="flex-none">
              
        <Link href={'/dashboard/buy-credits'}>
          <button className="btn">
            Buy More Credits
            <div className="badge badge-secondary">{userDetail?.credits}</div>
            Credits left
          </button>  
        </Link>
      </div>
      <div className="flex-none">
        <UserButton></UserButton>
      </div>  
    </div>

  )
}

export default Header