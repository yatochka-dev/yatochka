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
                'relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'
            }
        >
            <div
                className={
                    'rounded-[2rem] absolute top-0 -right-4 -z-10 w-[101%] h-[103%] bg-dark rounded-br-3xl dark:bg-light'
                }
            />
            <Link
                href={link}
                target={'_blank'}
                rel={'noreferrer'}
                className={
                    'w-full inline-block cursor-pointer overflow-hidden rounded-lg'
                }
            >
                <ScaleImage
                    src={image}
                    alt={title}
                    className={'w-full h-auto'}
                    priority
                />
            </Link>
            <Link href={link} target={'_blank'} rel={'noreferrer'}>
                <h2
                    className={
                        'capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'
                    }
                >
                    {title}
                </h2>
            </Link>
            <p className={'text-sm mb-2 sm:hidden'}>{summary}</p>
            <span
                className={'text-primary dark:text-primaryDark font-semibold'}
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
                    'w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'
                }
            >
                <Layout className={'pt-16 pb-48'}>
                    <AnimatedText
                        text={'Words Can Change The World! '}
                        className={
                            'mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                        }
                    />
                    <ul
                        className={
                            'grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1'
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
                            'font-bold text-4xl w-full text-center my-16 mt-32'
                        }
                    >
                        All Articles
                    </h2>
                    <ul>
                        {allArticles.map((article, index) => (
                            <motion.li
                                key={`${article.createdAt.toJSON()}-${index}`}
                                className={
                                    'relative w-full p-4 py-6 my-4 rounded-2xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col'
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
                                        'text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 sm:mt-4 xs:text-sm xs:mt-2 '
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
