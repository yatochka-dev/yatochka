import React from 'react'
import Head from 'next/head'
import { Layout } from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { StaticImageData } from 'next/image'
import { GithubIcon } from '@/components/Icons'

import ProjectImage from '@/public/images/projects/crypto-screener-cover-image.jpg'
import classNames from 'classnames'
import { ScaleImage } from '@/components/ScaleImage'
import PageTransition from '@/components/PageTransition'

const Project: React.FC<{
    type: string
    title: string
    summary?: string
    image: StaticImageData
    link: string
    githubLink: string
    featured?: boolean
}> = ({ type, title, summary, image, link, githubLink, featured }) => {
    return (
        <article
            className={classNames(
                'w-full flex items-center border border-solid border-dark relative bg-light dark:bg-dark dark:border-light',
                {
                    'justify-between rounded-3xl p-12 shadow-2xl rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4':
                        featured,
                    'flex-col justify-center rounded-2xl p-6 xs:p-4': !featured,
                },
            )}
        >
            <div
                className={classNames(
                    'absolute top-0 -right-4 -z-10 w-[101%] h-[103%] bg-dark rounded-br-3xl dark:bg-light',
                    {
                        'rounded-[2.5rem] xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]':
                            featured,
                        'rounded-[2rem] md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]':
                            !featured,
                    },
                )}
            />
            <Link
                href={link}
                target={'_blank'}
                rel={'noreferrer'}
                className={classNames(
                    'cursor-pointer overflow-hidden rounded-lg',
                    {
                        'w-1/2 lg:w-full': featured,
                        'w-full': !featured,
                    },
                )}
            >
                <ScaleImage
                    src={image}
                    alt={title}
                    className={'w-full h-auto'}
                    priority={featured}
                />
            </Link>

            <div
                className={classNames(
                    'flex flex-col items-start justify-between',
                    {
                        'w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6': featured,
                        'w-full mt-4': !featured,
                    },
                )}
            >
                <span
                    className={classNames(
                        'text-primary font-medium text-xl dark:text-primaryDark',
                        {
                            'xs:text-base': featured,
                            'lg:text-lg md:text-base': !featured,
                        },
                    )}
                >
                    {type}
                </span>
                <Link
                    href={link}
                    target={'_blank'}
                    rel={'noreferrer'}
                    className={'hover:underline underline-offset-2'}
                >
                    <h2
                        className={classNames(
                            'my-2 w-full text-left font-bold dark:text-light dark:no-underline hover:dark:text-light/75 dark:transition-colors dark:duration-200 dark:ease',
                            {
                                'text-4xl sm:text-sm': featured,
                                'text-3xl lg:text-2xl': !featured,
                            },
                        )}
                    >
                        {title}
                    </h2>
                </Link>
                {featured ? (
                    <p
                        className={
                            'my-2 font-medium text-dark dark:text-light sm:text-sm'
                        }
                    >
                        {summary}
                    </p>
                ) : null}
                <div
                    className={classNames('mt-2 flex items-center', {
                        'flex-row-reverse justify-between w-full': !featured,
                    })}
                >
                    <Link
                        href={githubLink}
                        target={'_blank'}
                        rel={'noreferrer'}
                        className={classNames('dark:text-light', {
                            'w-10': featured,
                            'w-8 md:w-6': !featured,
                        })}
                    >
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target={'_blank'}
                        rel={'noreferrer'}
                        className={classNames('text-lg font-semibold', {
                            'ml-4 rounded-lg bg-dark text-light p-2 px-6 dark:bg-light dark:text-dark sm:px-4 sm:text-base':
                                featured,
                            'underline dark:text-light md:text-base': !featured,
                        })}
                    >
                        Visit&nbsp;{featured ? 'Project' : null}
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
    return (
        <>
            <Head>
                <title>Yatochka | Projects Page</title>
                <meta name="description" content="About page" />
            </Head>
            <PageTransition />

            <main
                className={
                    'w-full mb-16 flex flex-col items-center justify-center'
                }
            >
                <Layout className={'pt-16'}>
                    <AnimatedText
                        text={'Imagination Trumps Knowledge!'}
                        className={
                            'mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                        }
                    />

                    <div
                        className={
                            'grid gird-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'
                        }
                    >
                        <div className={'col-span-12'}>
                            <Project
                                featured
                                title={'Crypto Screener Application'}
                                summary={
                                    'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \n' +
                                    'It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \n' +
                                    'local currency.'
                                }
                                link={'/'}
                                githubLink={'https://github.com'}
                                image={ProjectImage}
                                type={'Featured Project'}
                            />
                        </div>
                        <div className={'col-span-6 sm:col-span-12'}>
                            <Project
                                title={'Crypto Screener Application'}
                                link={'/'}
                                githubLink={'https://github.com'}
                                image={ProjectImage}
                                type={'Featured Project'}
                            />
                        </div>
                        <div className={'col-span-6 sm:col-span-12'}>
                            <Project
                                title={'Crypto Screener Application'}
                                link={'/'}
                                githubLink={'https://github.com'}
                                image={ProjectImage}
                                type={'Featured Project'}
                            />
                        </div>
                        <div className={'col-span-12'}>
                            <Project
                                featured
                                title={'Crypto Screener Application'}
                                summary={
                                    'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \n' +
                                    'It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \n' +
                                    'local currency.'
                                }
                                link={'/'}
                                githubLink={'https://github.com'}
                                image={ProjectImage}
                                type={'Featured Project'}
                            />
                        </div>
                        <div className={'col-span-6 sm:col-span-12'}>
                            <Project
                                title={'Crypto Screener Application'}
                                link={'/'}
                                githubLink={'https://github.com'}
                                image={ProjectImage}
                                type={'Featured Project'}
                            />
                        </div>
                        <div className={'col-span-6 sm:col-span-12'}>
                            <Project
                                title={'Crypto Screener Application'}
                                link={'/'}
                                githubLink={'https://github.com'}
                                image={ProjectImage}
                                type={'Featured Project'}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects
