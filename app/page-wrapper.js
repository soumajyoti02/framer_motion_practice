"use client"

import { motion, AnimatePresence } from "framer-motion"


import React from 'react'

const PageWrapper = ({ children }) => {
    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    exist={{ opacity: 0, y: 15 }}
                    transition={{ delay: 0.25 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default PageWrapper
