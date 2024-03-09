
import React, {useEffect, useState} from 'react';
import { FaTrash } from "react-icons/fa";
import axios from 'axios'
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { Button, Checkbox, Label, TextInput , Textarea, Select, FileInput} from 'flowbite-react';
import { Table } from 'flowbite-react';
import './styles/adminHome.css';
import {Link} from 'react-router-dom'


export default function AdminHome() {
    const [data, setData] = useState([])
    const [addSection, setAddSection] = useState(false)
    const [addSection1, setAddSection1] = useState(false)
    const [addSection2, setAddSection2] = useState(false)
    const [addSection3, setAddSection3] = useState(false)
    
    const [userData, setUserData] = useState('')

   
    const [query, setQuery] = useState("")
    console.log(data.filter(user=>user.email.toLowerCase().includes("1")))
    const logOut=()=>{
        window.localStorage.clear();
        window.location.href='./sign-in'
    };

 //Хэрэглэгчид
    useEffect(()=>{
        fetch('http://localhost:3000/getUser', {
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,'userData')
            setData(data.data)
        })
    },[])

//​http://localhost:3000/deleteUser/65827ff9af863c83570ee2e0
axios.defaults.baseURL = 'http://localhost:3000';

    const deleteUser = async(id, fname)=>{
        if(window.confirm(`Are you sure you want to delete ${fname} This user??`));
        const data = await axios.delete('/deleteUser/'+id)
        alert(data.data.message)
        window.location.href='/userDetails'
    }
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

return(
    
        <div className='container w-full bg-gold-600'> 
            <div className='dashboard w-1/5 h-auto bg-blue-600 flex flex-col'> 
                    <h1>Dashboard</h1>
                    <>Logo</>
                    <button type="button" className="text-gray-900 flex bg-white border border-gray-300 justify-around  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"> <span>{userData.email}</span></button>
             
                    <button type="button"  onClick={()=> setAddSection(true)} className="text-gray-900 flex  bg-white border border-gray-300 justify-around  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><span>Хэрэглэгчид </span></button>
             
                    <button type="button" onClick={()=> setAddSection1(true)} className="text-gray-900 flex bg-white border border-gray-300 justify-around  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Бүтээгдэхүүн нэмэх </button>
             
                    <button type="button" onClick={()=> setAddSection2(true)} className="text-gray-900 bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><span>Бүтээгдэхүүн</span></button>
             
                    <button type="button" onClick={()=> setAddSection3(true)} className="text-gray-900 bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Хэрэглэгчийн бүтээгдэхүүн</button>
             
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Үрний мэдээлэл нэмэх</button>
             
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Үрний мэдээлэл харах</button>
             
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Авах хүсэлтүүд харах</button>

                    <button>Banner</button>
                    <h1>Advertice</h1>

                    <button onClick={logOut} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Log Out</button>
            </div>
            <div className='w-4/5 h-auto flex flex-col bg-green-400 justify-center items-center'>
                  
            {
                addSection &&(
                    
                    <div className='relative h-full w-full overflow-x-auto shadow-md sm:rounded-lg'>
                        <input type="search" placeholder="Search Email" onChange={(e)=>setQuery(e.target.value)} className='block w-full p-4 ps-10 text-sm text-gray-900 border   bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <tr>
                                <th className='px-6 py-3'>No</th>
                                <th className='px-6 py-3'>First Name</th>
                                <th className='px-6 py-3'>Last Name</th>
                                <th className='px-6 py-3'>Email</th>
                                <th className='px-6 py-3'>Usertype</th>
                                <th className='px-6 py-3'>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            { 
                                data.filter(user=>user.email.toLowerCase().includes(query)).map((user,index )=> { 
                                return( 
                                    <tr key={user._id} className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 relative'>
                                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{index+1}</td>
                                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{user.fname}</td>
                                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{user.lname}</td>
                                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{user.Usertype}</td>
                                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{user.email}</td>
                                        <td>
                                            <button className="text-gray-900  bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"onClick={()=> deleteUser(user._id, user.fname)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                                })
                            }
                            </tbody>
                            
                        </table>
                        <button className="text-gray-900 absolute right-1 top-1 bg-white border-4 border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={()=> setAddSection(false)}>Гарах</button>
                    
                    </div>

                    )
            }
            {
                    
                addSection1 &&(
                  

                            <form onSubmit={handleProductSubmit} className="mx-auto w-full h-full bg-white flex flex-col items-center relative">
                                <h1>UPLOAD PRODUCT</h1>
                                <div className='w-2/4 h-2/4'>
                                    <div className='mb-2 block'>
                                            <Label htmlFor="floating_email">Name</Label>
                                            <TextInput htmlFor='email' type='text 'id='name' name='name' placeholder="Name" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' required/>
                                        </div>
                                        <div className='flex w-full mb-2 items-center gap-5'>
                                            <div className='w-1/2'>
                                                <Label >Price</Label>
                                                <TextInput htmlFor='price' type='text 'id='price' name='price' placeholder="price" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' required/>
                                            </div>

                                            <div className="w-1/2  ">
                                                <Label htmlFor="inputState" value="category">Category</Label>
                                                <Select id='inputState' name='category' value={selectedProductCategories} onChange={handleChangeSelectedValue} className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' >
                                                {
                                                    productCategories.map((option) => <option key={option} value={option}>{option}</option>)
                                                }
                                                </Select>
                                            </div>
                                        </div>
                                        
                                        <div className='mb-2 block'>
                                            <Label >ImageURL</Label>
                                            <TextInput htmlFor='image' type='text 'id='imageURL' name='imageURL' placeholder="ImageURL" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' required/>
                                        </div>

                                        <div className='mb-2 flex'>
                                            <div className='w-1/3 flex justify-start items-center'>
                                                <div className='w-5/6 h-5/6 bg-gray-200 rounded'></div>
                                            </div>
                                            <div className='2/3'>
                                                <FileInput id="file" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' helperText="A profile picture is useful to confirm your are logged into your account" />
                                            </div>
                                           
                                        </div>
                                        
                                        <div className='mb-2 block'>
                                            <Label >Description</Label>
                                            <Textarea htmlFor='email' type='text 'id='desc' name='desc' placeholder="Enter Your Product Description...." required />
                                        </div>
   
                                        <button className="w-full text-gray-900 bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={()=> setAddSection1(false)}>Болих</button>
                                        <button className="w-full text-gray-900 bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Нэмэх</button>
                                        <button className="text-gray-900 absolute right-2 top-4 bg-white border-4 border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={()=> setAddSection1(false)}>Гарах</button>
                                </div>
                                   
                              
                            </form>
                    )
            }
            {
                addSection2 &&(
                    
                    <div className='h-full w-full overflow-x-auto bg-white shadow-md sm:rounded-lg relative flex flex-col'>
                       <h1 className='text-blue-800 text-lg'>ADMIN PRODUCTS GET FETCH</h1>
                        <div className="search flex justify-center">
                            <input className='w-7/12 rounded h-2/2' onChange={(e)=>setQuery1(e.target.value)} placeholder="Search with Product Name" type='search'/>
                        </div>
                       <button className="text-gray-900 absolute right-2 top-4 bg-white border-4 border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={()=> setAddSection2(false)}>Гарах</button>
                        <div className='w-full h-auto border-4 border-gray-300'>
                        <div className="overflow-x-auto">
                                <Table>
                                        <Table.Head>
                                            <Table.HeadCell>No</Table.HeadCell>
                                            <Table.HeadCell>Product Name</Table.HeadCell>
                                            <Table.HeadCell>Product Image</Table.HeadCell>
                                            <Table.HeadCell>Description</Table.HeadCell>
                                            <Table.HeadCell>Category</Table.HeadCell>
                                            <Table.HeadCell>Price</Table.HeadCell>
                                            <Table.HeadCell>Edit</Table.HeadCell>
                                            <Table.HeadCell>Delete</Table.HeadCell>
                                            <Table.HeadCell>
                                                <span className="sr-only">Edit</span>
                                            </Table.HeadCell>
                                        </Table.Head>

                                      {/*   data.filter(user=>user.email.toLowerCase().includes(query)).map((user,index )=> */}
                                        {
                                            
                                            allProducts.filter(product=>product.name.toLowerCase().includes(query1)).map((product,index) =>
                                                <Table.Body className="divide" key={product._id}>
                                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                <Table.Cell className='text-base text-black'>{index+1}</Table.Cell>
                                                                <Table.Cell className='text-base text-black'>{product.name}</Table.Cell>
                                                                <Table.Cell><img style={{width:'80px', height:'80px'}}src={product.imageURL}/></Table.Cell>
                                                                <Table.Cell className='text-base text-black'>{product.desc}</Table.Cell>
                                                                <Table.Cell className='text-base text-black'>{product.category}</Table.Cell>
                                                                <Table.Cell className='text-base text-black'>{product.price}</Table.Cell>
                                                                <Table.Cell className='text-base text-blue-600'><Link to={`/editProduct/${product._id}`}>Edit</Link></Table.Cell>
                                                                <Table.Cell className='text-base text-red-600'><FaTrash onClick={()=> handleDelete(product._id)} className='text-4x1'/></Table.Cell>
                                                        </Table.Row>
                                                                        </Table.Body>
                                                                    )
                                                                }
                                                            </Table>
                                        </div>
                            </div>
                    </div>
                    )
                }
           {
            addSection3 &&(
                    
                        <div className='h-full w-full overflow-x-auto bg-white shadow-md sm:rounded-lg relative flex flex-col'>
                       <h1 className='text-blue-800 text-lg'>USER PRODUCTS GET FETCH</h1>
                        <div className="search flex justify-center">
                            <input className='w-7/12 rounded h-2/2' onChange={(e)=>setQuery3(e.target.value)} placeholder="Search with Product Name" type='search'/>
                        </div>
                       <button className="text-gray-900 absolute right-2 top-4 bg-white border-4 border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={()=> setAddSection3(false)}>Гарах</button>
                        <div className='w-full h-auto border-4 border-gray-300'>
                        <div className="overflow-x-auto">
                                <Table>
                                        <Table.Head>
                                            <Table.HeadCell>No</Table.HeadCell>
                                            <Table.HeadCell>Product Name</Table.HeadCell>
                                            <Table.HeadCell>Product Image</Table.HeadCell>
                                            <Table.HeadCell>Description</Table.HeadCell>
                                            <Table.HeadCell>Category</Table.HeadCell>
                                            <Table.HeadCell>Price</Table.HeadCell>
                                            <Table.HeadCell>Edit</Table.HeadCell>
                                            <Table.HeadCell>Delete</Table.HeadCell>
                                            <Table.HeadCell>
                                                <span className="sr-only">Edit</span>
                                            </Table.HeadCell>
                                        </Table.Head>

                                      {/*   data.filter(user=>user.email.toLowerCase().includes(query)).map((user,index )=> */}
                                        {
                                            
                                            allUserProducts.filter(product=>product.name.toLowerCase().includes(query3)).map((product,index) =>
                                                <Table.Body className="divide" key={product._id}>
                                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                                <Table.Cell className='text-base text-black'>{index+1}</Table.Cell>
                                                                <Table.Cell className='text-base text-black'>{product.name}</Table.Cell>
                                                                <Table.Cell><img style={{width:'80px', height:'80px'}}src={product.imageURL}/></Table.Cell>
                                                                <Table.Cell className='text-base text-black'>{product.desc}</Table.Cell>
                                                                <Table.Cell className='text-base text-black'>{product.category}</Table.Cell>
                                                                <Table.Cell className='text-base text-black'>{product.price}</Table.Cell>
                                                                <Table.Cell className='text-base text-blue-600'><Link to={`/editProduct/${product._id}`}>Edit</Link></Table.Cell>
                                                                <Table.Cell className='text-base text-red-600'><FaTrash onClick={()=> handleDelete(product._id)} className='text-4x1'/></Table.Cell>
                                                        </Table.Row>
                                                                        </Table.Body>
                                                                    )
                                                                }
                                                            </Table>
                                        </div>
                            </div>
                    </div>


                       
                       

            )
           }
<div>
  


   </div>
            <div>
                <h1>DASHBOARD GRAPH</h1>
            </div>
            </div>
        </div>   
        )
    }