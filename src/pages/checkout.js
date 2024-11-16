import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import { useSession } from 'next-auth/react'

function Checkout() {
    const items = useSelector(selectItems)
    const { data: session } = useSession();
    const total = useSelector(selectTotal)

    return (
    <div className='bg-gray-100'>
        <Header/>
        <main className='lg: flex max-w-screen-2xl mx-auto'>
            {/* left */}
            <div className='flex-grow m-5 shadow-sm'>
                <Image
                src='https://links.papareact.com/ikj'
                width={1020}
                height={250}
                objectFit='contain'
                />
                <div className='felx flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>{items.length === 0 ? "Your Amazon Basket is empty" : "Shopping Basket"}</h1>
                </div>
                {items.map((item,i) => (
                    <CheckoutProduct
                        key={i}
                        id={item.id}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}
                        description={item.description}
                        catagory={item.catagory}
                        image={item.image}
                        hasPrime={item.hasPrime}
                    />
                ))}
            </div>
            {/* right */}
            <div className='felx flex-col bg-white p-10 shadow-md'>
                {items.length > 0 && (
                    <>
                        <h2 className='whitespace-nowrap'>Subtotal ({items.length} items):{" "}
                            <span className='font-bold'>
                                 ${total}
                            </span>
                        </h2>
                        <button 
                        disabled={!session}
                        className={`button mt-2  ${!session && 'from-gray-900 to-gray-300 text-gray-300 cursor-not-allowed'}`}>
                            {!session ? 'Sign In to CheckOut': 'Proceed to checkout'}
                        </button>
                    </>
                )}
            </div>
        </main>
    </div>
  )
}

export default Checkout
