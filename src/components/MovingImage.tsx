import React, { MouseEvent, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'
import 'next/dist/client/image'
import classNames from 'classnames'

const MagicImage = motion(Image)

export const MovingImage: React.FC<{
    title: string
    image: string
    link: string
}> = ({ image, title, link }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imageRef = useRef<HTMLImageElement | null>(null)

    const onLinkMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
        imageRef.current?.style.setProperty('display', 'inline-block')
        x.set(event.pageX)
        y.set(10)
    }

    const onLinkMouseLeave = (_event: MouseEvent<HTMLAnchorElement>) => {
        imageRef.current?.style.setProperty('display', 'none')
        x.set(0)
        y.set(0)
    }

    return (
        <Link
            href={link}
            target={'_blank'}
            onMouseMove={onLinkMouseMove}
            onMouseLeave={onLinkMouseLeave}
        >
            <h2 className={'capitalize text-xl font-semibold hover:underline'}>
                {title}
            </h2>
            <MagicImage
                src={image}
                alt={title}
                className={
                    'w-96 h-auto absolute rounded-lg z-10 hidden md:!hidden'
                }
                style={{
                    x,
                    y,
                }}
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.2,
                }}
                ref={imageRef}
            />
        </Link>
    )
}
