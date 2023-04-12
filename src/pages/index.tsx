import { Layout } from '@/components/Layout'
import Image from 'next/image'
import ProfilePicture from '@/public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import LightBulb from '@/public/images/svgs/miscellaneous_icons_1.svg'
import React from 'react'
import PageTransition from '@/components/PageTransition'

export default function Home() {
    return (
        <>
            <PageTransition />

            <main
                className={
                    'flex items-center text-dark w-full min-h-screen dark:text-light'
                }
            >
                <Layout className={'pt-0 md:p-16 sm:pt-8'}>
                    <div className="flex items-center justify-between w-full lg:flex-col">
                        <div className={'w-1/2 md:w-full'}>
                            <Image
                                src={ProfilePicture}
                                alt={'Yatochka'}
                                className={
                                    'w-full h-auto lg:hidden md:inline-block md:w-full'
                                }
                                priority={true}
                                sizes={
                                    '(max-width: 768px) 100vw, ' +
                                    '(max-width: 1200px) 50vw, 50vw'
                                }
                            />
                        </div>
                        <div
                            className={
                                'w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'
                            }
                        >
                            <AnimatedText
                                text={
                                    'Turning Vision Into Reality With Code And Design.'
                                }
                                className={
                                    '!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
                                }
                            />
                            <p
                                className={
                                    'my-4 text-base font-medium md:text-sm sm:text-xs'
                                }
                            >
                                As a skilled full-stack developer, I am
                                dedicated to turning ideas into innovative web
                                applications. Explore my latest projects and
                                articles, showcasing my expertise in React.js
                                and web development.
                            </p>
                            <div
                                className={
                                    'flex items-center self-start mt-2 lg:self-center'
                                }
                            >
                                <Link
                                    download
                                    href={'/dummy.pdf'}
                                    target={'_blank'}
                                    className={
                                        'flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light transition-colors ease duration-200 md:p-2 md:px-4 md:text-base'
                                    }
                                >
                                    Resume <LinkArrow className={'w-6 ml-1'} />
                                </Link>
                                <Link
                                    href={'mailto:philipchef13@gmail.com'}
                                    target={'_blank'}
                                    className={
                                        'ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base'
                                    }
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
                <HireMe />
                <div
                    className={
                        'absolute right-8 bottom-8 inline-block w-24 md:hidden'
                    }
                >
                    <Image
                        src={LightBulb}
                        alt={"Yatochka's Thinking"}
                        className={'w-full h-auto'}
                    ></Image>
                </div>
            </main>
        </>
    )
}
