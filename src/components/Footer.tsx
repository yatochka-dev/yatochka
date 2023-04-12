import React from 'react'
import { Layout } from '@/components/Layout'
import Link from 'next/link'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer
            className={
                'w-full border-t-2 border-solid border-dark text-lg font-medium dark:border-light dark:text-light sm:text-base'
            }
        >
            <Layout
                className={
                    'flex items-center justify-between py-8 lg:flex-col lg:gap-4 lg:py-6'
                }
            >
                <span>{currentYear} &copy; All Rights Reserved.</span>
                <div className={'flex items-center'}>
                    Built with
                    <span
                        className={
                            'px-1 text-2xl text-primary dark:text-primaryDark'
                        }
                    >
                        &#9825;
                    </span>
                    by&nbsp;
                    <Link href={'/'} className={'underline underline-offset-2'}>
                        Yatochka
                    </Link>
                </div>
                <Link
                    href={'/'}
                    target={'_blank'}
                    rel={'noreferrer'}
                    className={'underline underline-offset-2'}
                >
                    Say Hello!
                </Link>
            </Layout>
            <div
                className={
                    'fixed bottom-8 left-8 h-10 min-w-[10px] bg-dark dark:bg-light'
                }
            >
                <div className={'flex gap-2 text-light dark:text-dark'}>
                    <div className={'hidden xl:inline-block'}>XL</div>
                    <div className={'hidden lg:inline-block'}>LG</div>
                    <div className={'hidden md:inline-block'}>MD</div>
                    <div className={'hidden sm:inline-block'}>SM</div>
                    <div className={'hidden xs:inline-block'}>XS</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
