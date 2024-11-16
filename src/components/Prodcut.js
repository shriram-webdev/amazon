import React,{useState} from 'react'
import Image from 'next/image'
import {StarIcon} from '@heroicons/react/solid'
// import CurrencyFormat from 'react-currency-format';
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'


const MAX_RATING = 5
const MIN_RATING = 1

function Prodcut({id,title,price,description,category,image}) {

  const dispatch = useDispatch();

    const [rating] = React.useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING +1)) + MIN_RATING 
    )
    const [hasPrime] = useState(Math.random() < 0.5)

    const addItemToBasket = () => {
      const prodcut = {
        id,title,price,description,category,image,hasPrime
      }
      // sending item to redux store
      dispatch(addToBasket(prodcut))
    }

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic'>{category}</p>
      <Image
      src={image}
      height={200}
      width={200}
      objectFit='contain'
      />
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
        {
            Array(rating).fill().map((_,i)=>(
                <StarIcon className='text-yellow-500' height={20} key={i}/>
            ))
        }
      </div>
      <p className='text-xs my-2 line-clamp-2'>{description}</p>
      <div>
        {/* <CurrencyFormat value={price} currency='GBP'/> */}
        <h4 className='mb-5'>${price}</h4>
      </div>
      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
            <img src="https://links.papareact.com/fdw" alt="prime" className='w-12' />
            <p className='text-xs text-gray-500'>Free Next Day Delevery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className='mt-auto button'>Add To Basket</button>
    </div>
  )
}

export default Prodcut
