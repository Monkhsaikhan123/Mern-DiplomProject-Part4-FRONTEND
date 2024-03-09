import { useQuery } from "@tanstack/react-query";
import React ,{useState, useEffect}from 'react'

const useCart = () => {
    const [userData, setUserData] = useState('')

    useEffect(()=>{

        fetch('http://localhost:3000/userData',{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type" : 'application/json',
                Accept: 'appilcation/json',
                'Access-Control-Allow-Origin' : '*',
            },
            body:JSON.stringify({
                token:window.localStorage.getItem("token")
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setUserData(data.data)
        })
    }, []);
    console.log(userData);

    const { refetch, data:cart=[]} = useQuery({
        queryKey: ['cart', userData?.email
    ],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/carts?email=${userData?.email}`)
            return res.json()
          },
    })

  return [cart,refetch]
}

export default useCart