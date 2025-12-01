import React, {useState} from 'react'
import "./Page1.css"
import "./Home.jsx"

function Page1() {
const [item, setItem] = useState([
{
 Id:1,
 image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19999364a.webp",
 price: 299,
 quantity: 1,
 Name: "Crispy Corn"
},
{
  Id: 2,
 image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19999364a.webp",
 price: 299,
 quantity: 1,
 Name: "Crispy Corn"
},
{
  Id: 3,
 image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19999364a.webp",
 price: 299,
 quantity: 1,
 Name: "Crispy Corn"
},
{
  Id: 4,
 image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19999364a.webp",
 price: 299,
 quantity: 1,
 Name: "Crispy Corn"
},
{
  Id: 5,
 image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19999364a.webp",
 price: 299,
 quantity: 1,
 Name: "Crispy Corn"
},
{
  Id: 6,
 image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19999364a.webp",
 price: 299,
 quantity: 1,
 Name: "Crispy Corn"
},
{
  Id: 7,
 image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19999364a.webp",
 price: 299,
 quantity: 1,
 Name: "Crispy Corn"
},
{
  Id: 8,
 image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19999364a.webp",
 price: 299,
 quantity: 1,
 Name: "Crispy Corn"
},
{
  Id: 9,
 image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19999364a.webp",
 price: 299,
 quantity: 1,
 Name: "Crispy Corn"
},
{
  Id: 10,
 image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19999364a.webp",
 price: 299,
 quantity: 1,
 Name: "Crispy Corn"
},
{
  Id: 11,
 image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19999364a.webp",
 price: 299,
 quantity: 1,
 Name: "Crispy Corn"
},
{
  Id: 12,
 image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19999364a.webp",
 price: 299,
 quantity: 1,
 Name: "Crispy Corn"
},
{
  Id: 13,
 image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19999364a.webp",
 price: 299,
 quantity: 1,
 Name: "Crispy Corn"
},
{
  Id: 14,
 image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19999364a.webp",
 price: 299,
 quantity: 1,
 Name: "Crispy Corn"
}
])


const increment = (Id) => {
setItem(item.map (p=>
  p.Id ===Id? {...p, quantity: p.quantity +1} : p
)
)
}
const decrement = (Id) => {
setItem(item.map(p=>
  p.Id ===Id && p.quantity>1 ? {...p, quantity: p.quantity -1} : p
))
}
const add =() => {
alert("Added")
}

  return (
    <>
    {item.map (product =>( 
<div className="Sri" Key={product.Id}>
        <img src={product.image} height={120}/>
        <p>Name:{product.Name}</p>
        <p>Price:{product.price}</p>
         <button onClick={() => decrement(product.Id)}>-</button>
         <span > {product.quantity} </span>
         <button onClick={()=> increment(product.Id)}>+</button>
         <p><button onClick={add}>Add to cart</button></p>
   </div>
    )
  )
   }
   
   </>
  )
  }

export default Page1