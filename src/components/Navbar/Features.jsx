
import { Button, Checkbox, Label, TextInput , Textarea, Select, FileInput} from 'flowbite-react';
import React, {useEffect, useState} from 'react';

const Features = () => {
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
  console.log(userData)

  

  const productCategories = [
    "Төмс",
    "Лууван",
    "Сонгино",
    "Байцаа",
    "Сармис",
    "Манжин",
    "Помидор",
    "Хулуу",
    "Огурци",
    "Салад навч",
    "Брокколи",
]

const [selectedProductCategories,  setSelectedProductCategory] = useState(productCategories[0])
const handleChangeSelectedValue = (event) => {
    console.log(event.target.value)
    setSelectedProductCategory(event.target.value)
}

const userId = userData._id
console.log(userId)

const handleProductSubmit = (event) => {
  console.log(selectedProductCategories)
    event.preventDefault();
    const form = event.target;

    const name = form.name.value
    const price = form.price.value
    const desc = form.desc.value
    const category = form.category.value
    const imageURL = form.imageURL.value
    const useremail = form.useremail.value
    const userId = form.userId
   

    const productObj={
        name,price,desc,category,imageURL,useremail, userId, 
    }
    console.log(productObj)
  
    fetch("http://localhost:3000/saveUserProduct",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(productObj)
    })
        .then(res=>res.json()
        .then(data=>{
            alert("Product saved successfully")
            form.reset()
        })
        )
}
  return (
    <div className='h-screen bg-gray-100'>
        <div>

        <form onSubmit={handleProductSubmit} className="mx-auto w-full h-full bg-white flex flex-col items-center relative">
                                <h1 className='text-8x1 font-bold tracking-tight text-gray-900 dark:text-white'>Хэрэглэгч Бараа нэмэх</h1>
                                <div className='w-2/4 h-2/4'>
                                    <div className='mb-2 block'>
                                            <Label htmlFor="floating_email">Name</Label>
                                            <TextInput htmlFor='email' type='text 'id='name' name='name' placeholder="Name" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' required/>
                                        </div>

                                        <div className='mb-2 block'>
                                            <Label htmlFor="floating_email">User Email</Label>
                                            <TextInput htmlFor='email' defaultValue={userData.email} disabled type='text 'id='useremail' name='useremail' placeholder="Name" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' required/>
                                        </div>

                                        <div className='mb-2 block'>
                                            <Label htmlFor="floating_email">UserID</Label>
                                            <TextInput htmlFor='email'  disabled type='text 'id='useremail' name='useremail' placeholder="Name" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' required/>
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
                                        
                                        <button className="w-full text-gray-900 bg-white border border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Нэмэх</button>
                                     
                                </div>
                                   
                              
                            </form>


                            <div>
                              PNG
                            </div>

        </div>
    </div>
  )
}

export default Features