import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

const MagicImage = motion(Image)

export const ScaleImage: React.FC<{
    src: StaticImageData
    alt: string
    className: string
    priority?: boolean
}> = (props) => {
    return (
        <MagicImage
            {...props}
            whileHover={{
                scale: 1.05,
            }}
            transition={{
                duration: 0.2,
            }}
            priority={props.priority || false}
            sizes={
                props.priority
                    ? '(max-width: 768px) 100vw, ' +
                      '(max-width: 1200px) 50vw, 50vw'
                    : undefined
            }
        />
    )
}
