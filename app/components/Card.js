import Link from 'next/link'
import React from 'react'

const Card = ({ img }) => {
    return (
        <div class=" p-4 ">
            <Link href='/' class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={img} />
            </Link>
            <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p class="mt-1">$16.00</p>
            </div>
        </div>
    )
}

export default Card
