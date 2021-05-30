import React, {useState} from 'react';
import './style.css'




const products = [

    {
          imgUrl :'https://cdn.vox-cdn.com/thumbor/EeQpOMN1j5f3Qmvo1oanEoByZzY=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20030737/xWZMNYm.png',
          name :'PLAYSTATION 5',
          description:'Backwards compatibility. Play a back catalogue of PS4™ games on your PS5 console',
          price:'$500',
          id: 1
    },
            
    {

        imgUrl:'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max',
        name:'IPHONE 12',
        description :'Iphone 12 is a premium flagship phone by apple ,made in china and assembled in california',
        price :'$1000',
        id: 2

   },

   {

    imgUrl:'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max',
    name:'IPHONE 12',
    description :'Iphone 12 is a premium flagship phone by apple ,made in china and assembled in california',
    price :'$1000',
    id : 3
},

{

    imgUrl:'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max',
    name:'IPHONE 12',
    description :'Iphone 12 is a premium flagship phone by apple ,made in china and assembled in california',
    price :'$1000',
    id : 4
},

{

    imgUrl:'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max',
    name:'IPHONE 12',
    description :'Iphone 12 is a premium flagship phone by apple ,made in china and assembled in california',
    price :'$1000',
    id : 5
},

{

    imgUrl:'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max',
    name:'IPHONE 12',
    description :'Iphone 12 is a premium flagship phone by apple ,made in china and assembled in california',
    price :'$1000',
    id : 6
},

{

    imgUrl:'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max',
    name:'IPHONE 12',
    description :'Iphone 12 is a premium flagship phone by apple ,made in china and assembled in california',
    price :'$1000',
    id : 7
},


{

    imgUrl:'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max',
    name:'IPHONE 12',
    description :'Iphone 12 is a premium flagship phone by apple ,made in china and assembled in california',
    price :'$1000',
    id : 8
}


]

function App (){
    const [cart, setCart] = useState([])
    const[qty, setQty] = useState(1)

    const changeState = (product) => {

        let new_Cart = [...new Set(cart)]
        setCart([...new_Cart, product])
           
    }

const deleteItem = (id) => {
         
       const newCart = cart.filter(cartItem=> cartItem.id !== id);
       setCart(newCart)
  
      }          
   
 const incrementBtn =(id) =>{
        setQty(qty + 1)

   }
   
 const decrementBtn =() =>{
        setQty(qty - 1)
        
   }

 return(
    
    <div id = 'main'>

      <header id = 'header'>

          <h1>REACT SHOPPING CART</h1>
          <h2>CART({cart.length})</h2>
      </header>

    
<section>
    
{cart.map((cartItem) =>(

<li key = {cartItem.id}>

   {cartItem.name} - {cartItem.price}

<button className = 'btn' onClick = {() =>deleteItem(cartItem.id)}>delete</button>              
<button onClick = {()=>incrementBtn(cartItem.id)} className = 'btn'>+</button>
<h3>qty:{qty}</h3>
<button  onClick = {decrementBtn} className = 'btn'>-</button>

</li>

))}


</section>


<main>

{products.map((product) =>(
           <div key ={product.id} className = 'container'>

                <h2>{product.name}</h2>
                <img  src = {product.imgUrl} alt = {product.name}></img>
                <p>{product.description}</p>
                <h3>{product.price}</h3>
                <button onClick ={() => changeState(product)}>ADD TO CART</button>               
          </div>

           ))}
</main>

   
</div> 
 )
   
}

   export default App;