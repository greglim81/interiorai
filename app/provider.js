"use client"
import React, { useEffect, useState } from 'react'

import { useUser } from '@clerk/nextjs'
import { UserDetailContext } from './_context/UserDetailContext';
import axios from 'axios';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function Provider({children}) {

    const {user} = useUser();
    //const {userDetail,setUserDetail}=useContext(UserDetailContext);
    const [userDetail, setUserDetail] = useState([]);

    useEffect(()=>{
        user&&VerifyUser();
    },[user])

    const VerifyUser = async() => {
        const dataResult=await axios.post('/api/verify-user',{
            user:user
        })
        setUserDetail(dataResult.data.result);
    }

    
  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>        
        <div>{children}</div>        
      </PayPalScriptProvider>           
    </UserDetailContext.Provider>      
  )
}

export default Provider