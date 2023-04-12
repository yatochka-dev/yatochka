import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from '@/components/LiIcon'

interface DetailProps {
    type: string
    time: string
    place: string
    info: string
}

const schools: DetailProps[] = [
    {
        type: 'Master Degree',
        time: '2020-2022',
        place: 'Stanford University',
        info: "Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding.",
    },
    {
        type: 'Bachelor Degree',
        time: '2016-2020',
        place: 'Massachusetts Institute Of Technology (MIT)',
        info: 'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.',
    },
    {
        type: 'Online Coursework',
        time: '2016-2020',
        place: 'Coursera And EdX',
        info: 'Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.',
    },
]

const Details: React.FC<DetailProps> = (props) => {
    const liRef = useRef<HTMLLIElement | null>(null)
    return (
        <li
            className={
                'mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0 md:w-[80%]'
            }
            ref={liRef}
        >
            <LiIcon reference={liRef} />
            <motion.div
                initial={{
                    y: 50,
                }}
                whileInView={{
                    y: 0,
                }}
                transition={{
                    duration: 0.5,
                    type: 'spring',
                }}
            >
                <h3
                    className={
                        'text-2xl font-bold capitalize sm:text-xl xs:text-lg'
                    }
                >
                    {props.type}&nbsp;
                </h3>
                <span
                    className={
                        'font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm'
                    }
                >
                    {props.time} | {props.place}
                </span>
                <p className={'w-full font-medium md:text-sm'}>{props.info}</p>
            </motion.div>
        </li>
    )
}

const Education: React.FC = ({}) => {
    const secondaryContainer = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: secondaryContainer,
        offset: ['start end', 'center start'],
    })

    return (
        <div className={'my-64'}>
            <h2
                className={
                    'mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl'
                }
            >
                Education
            </h2>

            <div
                className={'relative mx-auto w-[75%] lg:w-[90%] md:w-full'}
                ref={secondaryContainer}
            >
                <motion.div
                    className={
                        'absolute left-[2.20rem] top-0 h-full w-1 origin-top bg-dark dark:bg-light md:left-[30px] md:w-[2px] xs:left-[20px]'
                    }
                    style={{
                        scaleY: scrollYProgress,
                    }}
                />

                <ul
                    className={
                        'ml-4 flex w-full flex-col items-start justify-between xs:ml-2'
                    }
                >
                    {schools.map((job, index) => (
                        <Details
                            {...job}
                            key={`job-details-${JSON.stringify(job)}-${index}`}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Education
