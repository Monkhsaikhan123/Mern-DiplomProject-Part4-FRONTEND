import React ,{useState, useEffect}from 'react'
import {Link} from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'
import Swal from 'sweetalert2'

const BlogCards = () => {
    const {name, image, price, quantity, category, description} = item
    const [isHeartFilled, setIsHeartFilled] = useState(false)

    const handleHeartClick = () => {
        setIsHeartFilled(!isHeartFilled)
    }
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
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/menu')
        .then(res => res.json())
        .then(data => {const specials = data.filter((item)=> item.category === "Хүнсний ногоо")
        console.log(specials)
        setRecipes(specials)
    })
    
    },[])
  
    const handleAddCart = (recipes) =>{
        console.log("btn clicked" ,recipes)
        if(userData && userData?.email){
            const cartItem = {menuItemId: item._id, email:userData.email, creator: userData._id , quantity, name, category, description, quantity : 1, image, price, email:userData.email}
            console.log(cartItem)
            fetch('http://localhost:3000/carts',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItem)
                
            })
            .then(res=>res.json())
            .then((data)=> {
                Swal.fire({
                    title: name,
                    text: "Сагсанд нэмэгдлээ!!!",
                    imageUrl: image,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                  });
            })
       } else{
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
       }   
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${isHeartFilled ? "text-rose-500" : "text-white"}`} onClick={handleHeartClick}>
        <FaHeart className='h-5 w-5 cursor-pointer'/>
    </div>
    <Link to={`/menu/${item._id}`}>
        <img src={item.image} alt="" />
    </Link>
        
    <div className="card-body">
        <Link to={`/menu/${item._id}`}><h2 className='card-title'>{item.name}</h2></Link>
        <p>{item.description}</p>
        <div className="card-actions justify-between items-center mt-2">
            <h5><span>$</span>{item.price}</h5>
            <h5><span>Тоо хэмжээ</span>: {item.quantity}</h5>
            <button className="btn bg-green text-white" onClick={() => handleAddCart(item)}>Таалагдлаа</button>
        </div>
    </div>
    
</div>
)
}


export default BlogCards