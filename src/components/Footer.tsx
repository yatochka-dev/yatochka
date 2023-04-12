import React from 'react'
import { Layout } from '@/components/Layout'
import Link from 'next/link'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer
            className={
                'w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'
            }
        >
            <Layout
                className={
                    'py-8 flex items-center justify-between lg:flex-col lg:py-6 lg:gap-4'
                }
            >
                <span>{currentYear} &copy; All Rights Reserved.</span>
                <div className={'flex items-center'}>
                    Built with
                    <span
                        className={
                            'text-primary text-2xl px-1 dark:text-primaryDark'
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
                    'fixed bottom-8 min-w-[10px] left-8 h-10 bg-dark dark:bg-light'
                }
            >
                <div className={'flex text-light dark:text-dark gap-2'}>
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
