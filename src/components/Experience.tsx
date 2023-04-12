import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from '@/components/LiIcon'

interface DetailProps {
    position: string
    company: string
    companyLink: string
    time: string
    address: string
    work: string
}

const jobs: DetailProps[] = [
    {
        position: 'Software Engineer',
        company: 'Google',
        companyLink: 'https://www.google.com/',
        time: '2022-Present',
        address: 'Mountain View, CA',
        work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
    },
    {
        position: 'Intern',
        company: 'Facebook',
        companyLink: 'https://www.facebook.com/',
        time: 'Summer 2021',
        address: 'Menlo Park, CA',
        work: 'Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.',
    },
    {
        position: 'Software Developer',
        company: 'Amazon',
        companyLink: 'https://www.amazon.com/',
        time: '2020-2021',
        address: 'Seattle, WA',
        work: "Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability.",
    },
    {
        position: 'Software Developer Intern',
        company: 'Microsoft',
        companyLink: 'https://www.microsoft.com/',
        time: 'Summer 2019',
        address: 'Redmond, WA',
        work: "Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component.",
    },
    {
        position: 'Teaching Assistant',
        company: 'MIT',
        companyLink: 'https://www.mit.edu/',
        time: 'Fall 2018',
        address: 'Massachusetts Ave, Cambridge, MA',
        work: 'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
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
                    {props.position}&nbsp;
                    <a
                        href={props.companyLink}
                        target={'_blank'}
                        rel={'noreferrer'}
                        className={
                            'capitalize text-primary dark:text-primaryDark'
                        }
                    >
                        @{props.company}
                    </a>
                </h3>
                <span
                    className={
                        'font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm'
                    }
                >
                    {props.time} | {props.address}
                </span>
                <p className={'w-full font-medium md:text-sm'}>{props.work}</p>
            </motion.div>
        </li>
    )
}

const Experience: React.FC = ({}) => {
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
                Experience
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
                    {jobs.map((job, index) => (
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

export default Experience
