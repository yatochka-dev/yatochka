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
                'my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between'
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
                        'capitalize font-bold text-2xl sm:text-xl xs:text-lg'
                    }
                >
                    {props.type}&nbsp;
                </h3>
                <span
                    className={
                        'capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'
                    }
                >
                    {props.time} | {props.place}
                </span>
                <p className={'font-medium w-full md:text-sm'}>{props.info}</p>
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
                    'font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'
                }
            >
                Education
            </h2>

            <div
                className={'w-[75%] mx-auto relative lg:w-[90%] md:w-full'}
                ref={secondaryContainer}
            >
                <motion.div
                    className={
                        'absolute left-[2.20rem] top-0 w-1 h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
                    }
                    style={{
                        scaleY: scrollYProgress,
                    }}
                />

                <ul
                    className={
                        'w-full flex flex-col items-start justify-between ml-4 xs:ml-2'
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
