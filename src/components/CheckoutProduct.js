import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/outline'
// import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux'
import { addToBasket,removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({ id, title, price, rating, description, catagory, image, hasPrime }) {

    const dispatch = useDispatch()

    const addItemToBasket = () =>{
        const produts = {id, title, price, rating, description, catagory, image, hasPrime}
        dispatch(addToBasket(produts))
    }

    const removeItemFromBasket = () =>{
        dispatch(removeFromBasket({id}))
    }

    return (
        <div className='grid grid-cols-5'>
            <Image
                src={image}
                height={200}
                width={200}
                objectFit='contain'
            />
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className=' text-yellow-500'  height={20}/>
                    ))}
                </div>
                <p className='text-sm my-2 line-clamp-3'>{description}</p>
                <p>${price}</p>
                {hasPrime && (
                    <div className='felx items-center space-x-2'>
                        <Image src='https://links.papareact.com/fdw' loading='lazy' layout='fill'/>
                        <p className='text-xs text-gray-500'>Free Next-day Delevery</p>
                    </div>
                )}
            </div>
            <div className='flex flex-col space-y-2 my-auto justify-self-end'> 
                <button className='button' onClick={addItemToBasket}>Add To Basket</button>
                <button className='button' onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
