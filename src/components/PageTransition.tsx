import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

interface PageTransitionProps {}

const PageTransition = () => {
    const router = useRouter()
    const getKey = (num: number) => `${router.pathname}-${num}`

    return (
        <>
            <motion.div
                className={
                    'fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-primary'
                }
                initial={{
                    x: '100%',
                    width: '100%',
                }}
                animate={{
                    x: '0%',
                    width: '0%',
                }}
                exit={{
                    x: ['0%', '100%'],
                    width: ['0%', '100%'],
                }}
                transition={{
                    duration: 0.8,
                    ease: 'easeInOut',
                }}
                // key={getKey(1)}
            />
            <motion.div
                className={
                    'fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-light'
                }
                initial={{
                    x: '100%',
                    width: '100%',
                }}
                animate={{
                    x: '0%',
                    width: '0%',
                }}
                transition={{
                    duration: 0.8,
                    ease: 'easeInOut',
                    delay: 0.2,
                }}
                // key={getKey(2)}
            />
            <motion.div
                className={
                    'fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-dark'
                }
                initial={{
                    x: '100%',
                    width: '100%',
                }}
                animate={{
                    x: '0%',
                    width: '0%',
                }}
                transition={{
                    delay: 0.4,
                    duration: 0.8,
                    ease: 'easeInOut',
                }}
                // key={getKey(3)}
            />
        </>
    )
}

export default PageTransition
