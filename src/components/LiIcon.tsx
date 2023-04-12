import React, { MutableRefObject } from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon: React.FC<{
    reference: MutableRefObject<HTMLLIElement | null>
}> = ({ reference }) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ['center end', 'center center'],
    })
    return (
        <figure className={'absolute left-0 stroke-dark dark:stroke-light'}>
            <svg
                width={'75'}
                height={'75'}
                viewBox={'0 0 100 100'}
                className={
                    '-rotate-90 md:h-[60px] md:w-[60px] xs:h-[45px] xs:w-[45px]'
                }
            >
                <circle
                    cx={'75'}
                    cy={'50'}
                    r={'20'}
                    className={
                        'fill-none stroke-primary stroke-1 dark:stroke-primaryDark'
                    }
                />
                <motion.circle
                    cx={'75'}
                    cy={'50'}
                    r={'20'}
                    className={'fill-light stroke-[5px] dark:fill-dark'}
                    style={{
                        pathLength: scrollYProgress,
                    }}
                />
                <circle
                    cx={'75'}
                    cy={'50'}
                    r={'10'}
                    className={
                        'animate-pulse fill-primary stroke-1 dark:fill-primaryDark'
                    }
                />
            </svg>
        </figure>
    )
}

export default LiIcon
