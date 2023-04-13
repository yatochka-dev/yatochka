import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

const MagicImage = motion(Image)

export const ScaleImage: React.FC<{
    src: StaticImageData | string
    alt: string
    className: string
    priority?: boolean
    fill?: boolean
}> = (props) => {
    return (
        <motion.img
            {...props}
            whileHover={{
                scale: 1.05,
            }}
            transition={{
                duration: 0.2,
            }}
        />
    )
}
