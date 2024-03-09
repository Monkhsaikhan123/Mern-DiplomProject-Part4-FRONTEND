import React, { useState, useEffect, useRef,} from 'react';
import Cards from '../Cards';
import {FaFilter} from 'react-icons/fa'
import Footer from '../Footer'
import Navbar1 from '../Navbar1';
const Team = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption,setSortOption]= useState("default")


  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage] = useState(6)

  //loading data
  useEffect(()=>{
      //fetch data
      const fetchData = async()=> {
          try{
              const response = await fetch('http://localhost:3000/menu');
              const data = await response.json();
              console.log(data)
              setMenu(data)
              setFilteredItems(data)
          }catch(err){
              console.log("Error fetching data", err)
      }
  }
  //call the function
  fetchData()
  },[])

    //filter data based on category
    const filterItems = (category) => {
      const filtered = category === 'all' ? menu : menu.filter((item)=> item.category === category)

      setFilteredItems(filtered)
      setSelectedCategory(category)

      setCurrentPage(1)
  };

  //show all data
  const showAllItems = () => {
      setFilteredItems(menu)
      setSelectedCategory('all')

      setCurrentPage(1)
  };

  //sorting based on A-Z, Z-A, Low-high Price

  const handleSortChange = (option) =>{
      setSortOption(option)
      let sortedItems = [...filteredItems];

      //logic
      switch(option){
          case "A-Z":
              sortedItems = sortedItems.sort((a,b) => a.name.localeCompare(b.name))
              break;
          case "Z-A":
              sortedItems = sortedItems.sort((a,b) => b.name.localeCompare(a.name))
              break;
          case "Low-high":
              sortedItems = sortedItems.sort((a,b) => a.price - b.price)
              break;
          case "High-low":
              sortedItems = sortedItems.sort((a,b) => b.price - a.price)
              break;
          default:
              sortedItems = sortedItems.sort((a,b) => a.name.localeCompare(b.name))
              break;
      }
      setFilteredItems(sortedItems)

      setCurrentPage(1)
  }


  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
 
  return (
    <div className='flex flex-col justify-center items-center bg-white'>
      <div className='w-10/12'>
          <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
            <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
              
                {/* Text    */}
                <div className='md:w-1/2 space-y-7 px-4'>
                        <h1 className='md:text-5x1 text-4xl font-bold md:leading-snug leading-snug'>
                            Lorem ipsum dolor sit amet consectetur
                        </h1>
                        <p className='text-xl text-[#4A4A4A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sit!</p>
                        <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
                </div>

                <div className='md:w-1/2'>
                    <img src="/src/assets/2.jpg"/>
                    <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
                        <div className='flex bg-white py-2 px-3 rounded-2x1 items-center gap-3 shadow-md w-64'>
                            <img src='/src/assets/3.jpg'/> 
                            <div className='space-y-1'>
                                <h5 className='font-medium mb-1'>Spicy noodles</h5>
                                <div className='rating rating-sm'>
                                    <input type="radio" name="rating-10" readOnly className="rating-hidden" />
                                    <input type="radio" name="rating-10" readOnly className="bg-green-500 mask mask-star-2" />
                                    <input type="radio" name="rating-10" readOnly className="bg-green-500 mask mask-star-2" />
                                    <input type="radio" name="rating-10" readOnly className="bg-green-500 mask mask-star-2" checked />
                                    <input type="radio" name="rating-10" readOnly className="bg-green-500 mask mask-star-2" />
                                    <input type="radio" name="rating-10" readOnly className="bg-green-500 mask mask-star-2" />
                                </div>
                                <p className='text-red'>$18.99</p>
                            </div>
                        </div>
                        <div className='md:flex hidden bg-white py-2 px-3 rounded-2x1 items-center gap-3 shadow-md w-64'>
                            <img src='/src/assets/5.jpg'/>
                            <div className='space-y-1'>
                                <h5 className='font-medium mb-1'>Spicy noodles</h5>
                                <div className='rating rating-sm'>
                                    <input type="radio" name="rating-10" readOnly className="rating-hidden" />
                                    <input type="radio" name="rating-10" readOnly className="bg-green-500 mask mask-star-2" />
                                    <input type="radio" name="rating-10" readOnly className="bg-green-500 mask mask-star-2" />
                                    <input type="radio" name="rating-10" readOnly className="bg-green-500 mask mask-star-2" checked />
                                    <input type="radio" name="rating-10" readOnly className="bg-green-500 mask mask-star-2" />
                                    <input type="radio" name="rating-10" readOnly className="bg-green-500 mask mask-star-2" />
                                </div>
                                <p className='text-red'>$18.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
       
       <div className='w-10/12'>
          <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
            <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap text-2xl'>
                    <button onClick={showAllItems} className={selectedCategory=== 'all' ? "active" : ""}>All</button>
                    <button onClick={()=> filterItems("Хүлэмжний ногоо")} className={selectedCategory=== 'Хүлэмжний ногоо' ? "active" : ""}>Хүлэмжний ногоо</button>
                    <button onClick={()=> filterItems("Навчит ногоо")} className={selectedCategory=== 'Навчит ногоо' ? "active" : ""}>Навчит ногоо</button>
                    <button onClick={()=> filterItems("Нарийн ногоо")} className={selectedCategory=== 'Нарийн ногоо' ? "active" : ""}>Нарийн ногоо</button>
                    <button onClick={()=> filterItems("Хүнсний ногоо")} className={selectedCategory=== 'Хүнсний ногоо' ? "active" : ""}>Хүнсний ногоо</button>
                    <button onClick={()=> filterItems("drinks")} className={selectedCategory=== 'drinks' ? "active" : ""}></button>
                </div>

                <div className='flex justity-end mb-4 rounded-sm'>
                      <div className='p-2'>
                            <FaFilter className='h-4 w-4 text-green'/>
                        </div>     

                        <select name='sort' id='sort' onChange={(e) => handleSortChange(e.target.value)} value={sortOption} className='px-2 py-1 rounded-sm'>
                            <option value='default'>Default</option>
                            <option value='A-Z'>A-Z</option>
                            <option value='Z-A'>Z-A</option>
                            <option value='Low-high'>Low-high</option>
                            <option value='High-low'>High-low</option>
                        </select>
                </div>
            </div>
            
       </div>

       <div className='w-10/12 grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4'>
        
       {
                    currentItems.map((item, index) => {
                        return (
                           <Cards key={index} item={item}/>
                        )
                    })
                }
       </div>

       <div className='flex justify-center my-8'>
            {
                Array.from({length: Math.ceil(filteredItems.length / itemPerPage)}).map((_, index)=>(
                    <button key={index+1} onClick={()=> paginate(index + 1)} className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-green text-white" : "bg-gray-200" }`}> 
                        {index + 1}
                    </button>
                ))
            }
        </div>
       <Footer/>
    </div>
    
    
  )
}

export default Team