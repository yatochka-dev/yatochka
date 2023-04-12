import React from 'react'
import Head from 'next/head'
import { Layout } from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import ArticleImage from '@/public/images/articles/pagination component in reactjs.jpg'
import ArticleImage2 from '@/public/images/articles/create loading screen in react js.jpg'
import { motion } from 'framer-motion'
import { ScaleImage } from '@/components/ScaleImage'
import { MovingImage } from '@/components/MovingImage'
import PageTransition from '@/components/PageTransition'

const MagicImage = motion(Image)

const allArticles: {
    createdAt: Date
    image: any
    title: string
    link: string
}[] = [
    {
        title: 'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling',
        createdAt: new Date('2023-04-09T15:23:00.000Z'),
        image: ArticleImage2,
        link: '/',
    },
    {
        title: 'Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers',
        createdAt: new Date('2023-04-08T09:45:00.000Z'),
        image: ArticleImage2,
        link: '/',
    },
    {
        title: 'Creating An Efficient Modal Component In React Using Hooks And Portals',
        createdAt: new Date('2023-04-07T14:12:00.000Z'),
        image: ArticleImage2,
        link: '/',
    },
    {
        title: 'Build A Fabulous Todo List App With React, Redux And Framer-Motion',
        createdAt: new Date('2023-04-06T11:20:00.000Z'),
        image: ArticleImage2,
        link: '/',
    },
    {
        title: "Redux Simplified: A Beginner's Guide For Web Developers",
        createdAt: new Date('2023-04-05T16:35:00.000Z'),
        image: ArticleImage2,
        link: '/',
    },
]

const FeaturedArticle: React.FC<{
    title: string
    image: StaticImageData
    time: string
    summary: string
    link: string
}> = ({ title, summary, image, link, time }) => {
    return (
        <li
            className={
                'relative col-span-1 w-full rounded-2xl border border-solid border-dark bg-light p-4 dark:border-light dark:bg-dark'
            }
        >
            <div
                className={
                    'absolute -right-4 top-0 -z-10 h-[103%] w-[101%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light'
                }
            />
            <Link
                href={link}
                target={'_blank'}
                rel={'noreferrer'}
                className={
                    'inline-block w-full cursor-pointer overflow-hidden rounded-lg'
                }
            >
                <ScaleImage
                    src={image}
                    alt={title}
                    className={'h-auto w-full'}
                    priority
                />
            </Link>
            <Link href={link} target={'_blank'} rel={'noreferrer'}>
                <h2
                    className={
                        'my-2 mt-4 text-2xl font-bold capitalize hover:underline xs:text-lg'
                    }
                >
                    {title}
                </h2>
            </Link>
            <p className={'mb-2 text-sm sm:hidden'}>{summary}</p>
            <span
                className={'font-semibold text-primary dark:text-primaryDark'}
            >
                {time}
            </span>
        </li>
    )
}

const Articles = () => {
    return (
        <>
            <Head>
                <title>Yatochka | Articles Page</title>
                <meta name="description" content="About page" />
            </Head>
            <PageTransition />

            <main
                className={
                    'mb-16 flex w-full flex-col items-center justify-center overflow-hidden dark:text-light'
                }
            >
                <Layout className={'pb-48 pt-16'}>
                    <AnimatedText
                        text={'Words Can Change The World! '}
                        className={
                            'mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                        }
                    />
                    <ul
                        className={
                            'grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'
                        }
                    >
                        <FeaturedArticle
                            title={
                                'Build A Custom Pagination Component In Reactjs From Scratch'
                            }
                            summary={
                                'Learn how to build a custom pagination component in ReactJS from scratch. \n' +
                                'Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
                            }
                            time={'9 min read'}
                            link={'/'}
                            image={ArticleImage}
                        />
                        <FeaturedArticle
                            title={
                                'Build A Custom Pagination Component In Reactjs From Scratch'
                            }
                            summary={
                                'Learn how to build a custom pagination component in ReactJS from scratch. \n' +
                                'Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
                            }
                            time={'9 min read'}
                            link={'/'}
                            image={ArticleImage2}
                        />
                    </ul>
                    <h2
                        className={
                            'my-16 mt-32 w-full text-center text-4xl font-bold'
                        }
                    >
                        All Articles
                    </h2>
                    <ul>
                        {allArticles.map((article, index) => (
                            <motion.li
                                key={`${article.createdAt.toJSON()}-${index}`}
                                className={
                                    'relative my-4 flex w-full items-center justify-between rounded-2xl border border-b-4 border-r-4 border-solid border-dark bg-light p-4 py-6 text-dark first:mt-0 dark:border-light dark:bg-dark dark:text-light sm:flex-col'
                                }
                                initial={{
                                    y: 200,
                                }}
                                whileInView={{
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        ease: 'easeInOut',
                                    },
                                }}
                                viewport={{ once: true }}
                            >
                                <MovingImage {...article} />
                                <span
                                    className={
                                        'pl-4 font-semibold text-primary dark:text-primaryDark sm:mt-4 sm:self-start sm:pl-0 xs:mt-2 xs:text-sm '
                                    }
                                >
                                    {article.createdAt.toUTCString()}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default Articles
