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
                    '-rotate-90 md:w-[60px] md:h-[60px] xs:w-[45px] xs:h-[45px]'
                }
            >
                <circle
                    cx={'75'}
                    cy={'50'}
                    r={'20'}
                    className={
                        'stroke-primary stroke-1 dark:stroke-primaryDark fill-none'
                    }
                />
                <motion.circle
                    cx={'75'}
                    cy={'50'}
                    r={'20'}
                    className={'stroke-[5px] fill-light dark:fill-dark'}
                    style={{
                        pathLength: scrollYProgress,
                    }}
                />
                <circle
                    cx={'75'}
                    cy={'50'}
                    r={'10'}
                    className={
                        'stroke-1 fill-primary dark:fill-primaryDark animate-pulse'
                    }
                />
            </svg>
        </figure>
    )
}

export default LiIcon
