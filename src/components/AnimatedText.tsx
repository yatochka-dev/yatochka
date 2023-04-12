import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedTextProps {
    text: string
    className?: string
}

const quoteVariants = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
}

const wordVariants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
    return (
        <div
            className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0`}
        >
            <motion.h1
                className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className}`}
                variants={quoteVariants}
                initial={'initial'}
                animate={'animate'}
            >
                {text.split(' ').map((word, index) => (
                    <motion.span
                        key={`animated-text-${index}-${word}`}
                        className={'inline-block'}
                        variants={wordVariants}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    )
}

export default AnimatedText
