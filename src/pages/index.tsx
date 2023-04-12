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
                    'flex min-h-screen w-full items-center text-dark dark:text-light'
                }
            >
                <Layout className={'pt-0 md:p-16 sm:pt-8'}>
                    <div className="flex w-full items-center justify-between lg:flex-col">
                        <div className={'w-1/2 md:w-full'}>
                            <Image
                                src={ProfilePicture}
                                alt={'Yatochka'}
                                className={
                                    'h-auto w-full lg:hidden md:inline-block md:w-full'
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
                                'flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center'
                            }
                        >
                            <AnimatedText
                                text={
                                    'Turning Vision Into Reality With Code And Design.'
                                }
                                className={
                                    '!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
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
                                    'mt-2 flex items-center self-start lg:self-center'
                                }
                            >
                                <Link
                                    download
                                    href={'/dummy.pdf'}
                                    target={'_blank'}
                                    className={
                                        'ease flex items-center rounded-lg border border-2 border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light transition-colors duration-200 hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light md:p-2 md:px-4 md:text-base'
                                    }
                                >
                                    Resume <LinkArrow className={'ml-1 w-6'} />
                                </Link>
                                <Link
                                    href={'mailto:philipchef13@gmail.com'}
                                    target={'_blank'}
                                    className={
                                        'ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
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
                        'absolute bottom-8 right-8 inline-block w-24 md:hidden'
                    }
                >
                    <Image
                        src={LightBulb}
                        alt={"Yatochka's Thinking"}
                        className={'h-auto w-full'}
                    ></Image>
                </div>
            </main>
        </>
    )
}
