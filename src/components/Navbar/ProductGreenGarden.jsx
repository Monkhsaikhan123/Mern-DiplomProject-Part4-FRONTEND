import React, { useState, useEffect, useRef,} from 'react';
import Cards2 from '../Cards2';
import {FaFilter} from 'react-icons/fa'
import Footer from '../Footer'
import Navbar1 from '../Navbar1';

const ProductGreenGarden = () => {
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
              const response = await fetch('http://localhost:3000/menu2');
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
              <div className='md:w-1/3 gap-1'>
                      <h1 className='md:text-5x1 text-4xl font-bold md:leading-snug leading-snug'>
                          Lorem ipsum dolor sit amet consectetur
                      </h1>
                      <p className='text-xl text-[#4A4A4A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sit!</p>
                      <button className='btn bg-green px-8 py-4 font-semibold text-white rounded-full'>Order Now</button>
              </div>
              <div className='md:w-2/3'>
                <div className="carousel carousel-center rounded-box">
                    <div className="carousel-item">
                      <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza" />
                    </div> 
                    <div className="carousel-item">
                      <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Pizza" />
                    </div> 
                    <div className="carousel-item">
                      <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Pizza" />
                    </div> 
                    <div className="carousel-item">
                      <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Pizza" />
                    </div> 
                    <div className="carousel-item">
                      <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" />
                    </div> 
                    <div className="carousel-item">
                      <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" />
                    </div> 
                    <div className="carousel-item">
                      <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza" />
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
                         <Cards2 key={index} item={item}/>
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

export default ProductGreenGarden