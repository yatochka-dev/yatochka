import React from 'react'
import { CircularText } from '@/components/Icons'
import Link from 'next/link'

const HireMe: React.FC = () => {
    return (
        <div
            className={
                'fixed md:absolute left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-[.9rem] md:bottom-auto sm:right-4'
            }
        >
            <div
                className={
                    'w-48 h-auto flex items-center justify-center relative md:w-24'
                }
            >
                <CircularText
                    className={'fill-dark animate-spin-slow dark:fill-light'}
                />
                <Link
                    href={'mailto:philipchef13@gmail.com'}
                    className={
                        'flex items-center justify-center absolute bg-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light text-light dark:bg-light dark:text-dark shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[10px] '
                    }
                >
                    Hire Me
                </Link>
            </div>
        </div>
    )
}

export default HireMe
