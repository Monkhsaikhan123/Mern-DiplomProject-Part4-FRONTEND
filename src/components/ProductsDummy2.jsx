import React ,{useState, useEffect}from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards2 from './Cards2'

const SimpleNextArrow = (props) => {
    const {className, style, onClick} = props;
    return(
        <div className={className} style={{...style, display : "block", background: "red" }} 
        onClick={onClick}>
            Next
        </div>
    )
}

const SimplePrewArrow = (props) => {
    const {className, style, onClick} = props;
    return(
        <div className={className} style={{...style, display : "block", background: "green" }} 
        onClick={onClick}>
            Prev
        </div>
    )
}

const ProductsDummy2 = () => {
    const [recipes, setRecipes] = useState([])
    const slider = React.useRef(null)

    useEffect(()=>{
        fetch('http://localhost:3000/menu2')
        .then(res => res.json())
        .then(data => {const specials = data.filter((item)=> item.category === "Хүнсний ногоо")
        console.log(specials)
        setRecipes(specials)
    })
    
    },[])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        nextArrow: <SimpleNextArrow />,
        prevArrow: <SimplePrewArrow />
      };


  return (
    <div className='w-full flex flex-col mt-1 justify-center items-center'>
    <div className='w-5/6'>
            <div className=' my-20 relative'>
            <div className='text-left'>
                <p className='text-red uppercase tracking-wide font-medium text-lg'></p>
                <h3 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug md:w-[520px]'>Хүлэмжинд тариалсан ногоо</h3>
            </div>

            <div className='md:absolute right-3 top-8 mb-10 md:mr-24'>
                <button onClick={()=>slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'>Back</button>
                <button onClick={()=>slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5'>Next</button>
            </div>
            <Slider ref={slider} {...settings} className='overflow-hidden mt-10 space-x-5'>
            {
                recipes.map((item,i)=>{
                    return(
                        <Cards2 item={item} key={i}/>
                    )
                    
                })
            }
            
        </Slider>

        </div>
    </div>
   
</div>
  )
}

export default ProductsDummy2