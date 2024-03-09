import React, { useState , useEffect } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea, Select } from 'flowbite-react';



const example1 = () => {
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

  const handleProductSubmit = (event) => {
    console.log("hello world")
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const price = form.price.value;
    const imageURL = form.imageURL.value;
    const desc = form.target.value;
    const category = form.category.value;
    console.log(name)
    const productObj={
        name,price,imageURL,desc,category
    }
    console.log(productObj)
}

 
  return (
    <div>
        <form onSubmit={handleProductSubmit} className="flex flex-col gap-4 w-full bg-white h-full border items-center border-gray-300">
                            <h1>Upload Products</h1>
                            <div className='w-2/3 flex flex-col bg-red-500'>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="name" value="name" />
                                    </div>
                                    <TextInput 
                                        id="name" 
                                        type="text" 
                                        name='name'
                                        placeholder="Барааны нэр" 
                                        required />
                                </div>

                                <div className='flex text-center gap-6'>
                                    <div className=" w-1/2">
                                        <Label htmlFor="price" value="price" ></Label>
                                        <TextInput 
                                        id="price" 
                                        name='price' 
                                        type="text" 
                                        placeholder='Үнэ' 
                                        required />
                                    </div>
                                    

                                    <div className="mb-2 block w-1/2  ">
                                        <Label htmlFor="inputState" value="category" ></Label>
                                        <Select id='inputState' name='category' value={selectedProductCategories} onChange={handleChangeSelectedValue}>
                                        {
                                            productCategories.map((option) => <option key={option} value={option}>{option}</option>)
                                        }
                                        </Select>
                                    </div>
                                    
                                </div>

                                <div className="mb-2 block">
                                    <div className="mb-2 block">
                                        <Label htmlFor="image" value="imageURL" ></Label>
                                    </div>
                                        <TextInput id="imageURL" name='imageURL'type="text" required/>
                                </div>

                                <div className="mb-2 block">
                                    <div className="mb-2 block">
                                        <Label htmlFor="desc" value="desc" />
                                    </div>
                                        <Textarea id="desc" name='desc' type="text" required shadow />
                                </div>
                                <button className="mb-2 block" onClick={()=> setAddSection1(false)}>Болих</button>
                                <button className="mb-2 block">Нэмэх</button> 

                            </div>
                        </form>


    </div>
      

        


  )
}

export default example1