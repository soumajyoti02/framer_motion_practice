"use client";

import React from 'react';
import Card from '../components/Card';
import PageWrapper from '../page-wrapper';
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        },
    },
}

const item = {
    hidden: {
        opacity: 0,
        x: 30,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        }
    }
}

// const container = {
//     hidden: { opacity: 1, scale: 0 },
//     visible: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//             delayChildren: 0.3,
//             staggerChildren: 0.2
//         }
//     }
// };

// const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//         y: 0,
//         opacity: 1
//     }
// };

const Products = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                {/* <PageWrapper> */}
                <div className="container px-5 py-24 mx-auto">
                    <motion.div
                        className="flex flex-wrap justify-center md:justify-evenly w-11/12"
                        variants={container}
                        initial="hidden"
                        animate="show" >

                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                            <motion.div key={index} className="h-[300px] w-[350px]" variants={item} >
                                <Card img={'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D'} />
                            </motion.div>
                        ))}


                    </motion.div>
                </div>
                {/* </PageWrapper > */}
            </section >
        </>
    )
}

export default Products;