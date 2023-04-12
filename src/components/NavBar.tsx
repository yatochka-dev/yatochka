import React, { MouseEvent, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { WithChildren, WithNonReqChildren } from '@/types'
import { useRouter } from 'next/router'
import {
    DribbbleIcon,
    GithubIcon,
    LinkedInIcon,
    MoonIcon,
    PinterestIcon,
    SunIcon,
    TwitterIcon,
} from '@/components/Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher, { TMode } from '@/hooks/useThemeSwitcher'
import classNames from 'classnames'

const CustomLink: React.FC<
    WithNonReqChildren & { href: string; title?: string; className?: string }
> = ({ href, title, children, className = '' }) => {
    // title and children are mutually exclusive

    if (children) {
        title = children.toString()
    }

    const router = useRouter()

    const isActive = router.pathname === href

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
                    isActive ? 'w-full' : 'w-0'
                }`}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const CustomMobileLink: React.FC<
    WithNonReqChildren & {
        href: string
        title?: string
        className?: string
        close: () => void
    }
> = ({ href, title, children, className = '', close }) => {
    // title and children are mutually exclusive

    if (children) {
        title = children.toString()
    }

    const router = useRouter()

    const isActive = router.pathname === href

    const handleClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            void router.push(href)
            close()
        },
        [close, href, router],
    )

    return (
        <button
            className={`${className} relative group text-light dark:text-dark`}
            onClick={handleClick}
        >
            {title}
            <span
                className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                    isActive ? 'w-full' : 'w-0'
                }`}
            >
                &nbsp;
            </span>
        </button>
    )
}

const SocialIcon: React.FC<WithChildren & { href: string }> = ({
    children,
    href,
}) => (
    <motion.a
        href={href}
        target={'_blank'}
        rel={'noreferrer'}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
    >
        {children}
    </motion.a>
)

const MobileNav: React.FC<{
    isOpen: boolean
    mode: TMode | ''
    setMode: (mode: TMode) => void
    handleClose: () => void
}> = ({ isOpen, mode, setMode, handleClose }) => {
    return (
        // backdrop
        <motion.div
            className={classNames(
                'fixed inset-0 z-10 bg-dark/30 backdrop-blur-sm',
            )}
            initial={{
                opacity: 0,
                scale: 0,
            }}
            animate={{
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0,
                transition: {
                    duration: 0.00000000001,
                    type: 'tween',
                },
            }}
            onClick={(event) => {
                // check if the click was on the backdrop and not on the modal
                if (event.target === event.currentTarget) {
                    handleClose()
                }
            }}
        >
            <motion.div
                className={
                    'z-30 min-w-[70vw] md:min-w-[90vw] flex flex-col justify-between items-center fixed !top-1/2 !left-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
                }
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    scale: isOpen ? 1 : 0.9,
                    translateX: '-50%',
                    translateY: '-50%',
                    transition: {
                        duration: 0.1,
                        type: 'tween',
                    },
                }}
            >
                <button
                    onClick={handleClose}
                    className={
                        'absolute top-4 right-4 fill-light dark:fill-dark'
                    }
                >
                    {/*  X  */}
                    <svg
                        height="20px"
                        width="20px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 460.775 460.775"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>{' '}
                        </g>
                    </svg>
                </button>
                <nav
                    className={
                        'flex items-center justify-center flex-col gap-4'
                    }
                >
                    <CustomMobileLink href={'/'} close={handleClose}>
                        Home
                    </CustomMobileLink>
                    <CustomMobileLink href={'/about'} close={handleClose}>
                        About
                    </CustomMobileLink>
                    <CustomMobileLink href={'/projects'} close={handleClose}>
                        Projects
                    </CustomMobileLink>
                    <CustomMobileLink href={'/articles'} close={handleClose}>
                        Articles
                    </CustomMobileLink>
                </nav>

                <div
                    className={
                        'flex items-center justify-center flex-wrap mt-2 gap-6 sm:gap-4 md:mt-4'
                    }
                >
                    <SocialIcon href={'https://twitter.com/'}>
                        <TwitterIcon className={`!w-6`} />
                    </SocialIcon>
                    <SocialIcon href={'https://github.com/'}>
                        <GithubIcon
                            className={`!w-6 bg-light rounded-full dark:bg-dark`}
                        />
                    </SocialIcon>
                    <SocialIcon href={'/'}>
                        <LinkedInIcon className={`!w-6`} />
                    </SocialIcon>
                    <SocialIcon href={'/'}>
                        <PinterestIcon
                            className={`!w-6 bg-light rounded-full`}
                        />
                    </SocialIcon>
                    <SocialIcon href={'/'}>
                        <DribbbleIcon className={`!w-6`} />
                    </SocialIcon>

                    <button
                        onClick={() =>
                            setMode(mode === 'dark' ? 'light' : 'dark')
                        }
                        className={classNames(
                            'flex items-center justify-center rounded-full p-1',
                            {
                                'bg-dark text-light': mode === 'light',
                                'bg-light text-dark': mode === 'dark',
                            },
                        )}
                    >
                        {mode === 'dark' ? (
                            <MoonIcon className={'fill-dark'} />
                        ) : (
                            <SunIcon className={'fill-dark'} />
                        )}
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}

const NavBar: React.FC = ({}) => {
    const { mode, setMode } = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        setIsOpen((prevState) => !prevState)
    }, [])

    const handleClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    useEffect(() => {
        if (isOpen) {
            // document.body.style.overflow = 'hidden'
            // document.body.style.maxHeight = '100svh'
            document.body.classList.add('overflow-hidden')
            document.body.classList.add('max-h-screen')
        } else {
            // document.body.style.overflow = 'unset'
            // document.body.style.maxHeight = 'unset'
            document.body.classList.remove('overflow-hidden')
            document.body.classList.remove('max-h-screen')
        }
    }, [isOpen])

    return (
        <header
            className={
                'relative w-full px-32 py-8 font-medium grid grid-rows-1 grid-cols-3 items-center dark:text-light z-10 lg:px-16 md:px-12 sm:px-8'
            }
        >
            <button
                className={'flex-col justify-center items-start hidden lg:flex'}
                onClick={handleClick}
            >
                <span
                    className={classNames(
                        'bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-transform duration-300 ease-in-out ',
                        {
                            'rotate-45 translate-y-1': isOpen,
                            '-translate-y-0.5': !isOpen,
                        },
                    )}
                />
                <span
                    className={classNames(
                        'bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-transform duration-300 ease-in-out',
                        {
                            'scale-0': isOpen,
                        },
                    )}
                />
                <span
                    className={classNames(
                        'bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y-0.5 transition-transform duration-300 ease-in-out',
                        {
                            '-rotate-45 -translate-y-1': isOpen,
                            'translate-y-0.5': !isOpen,
                        },
                    )}
                />
            </button>
            <MobileNav
                mode={mode}
                setMode={setMode}
                isOpen={isOpen}
                handleClose={handleClose}
            />
            <nav className={'flex justify-center lg:hidden'}>
                <CustomLink href={'/'} className={'mr-4'}>
                    Home
                </CustomLink>
                <CustomLink href={'/about'} className={'mx-4'}>
                    About
                </CustomLink>
                <CustomLink href={'/projects'} className={'mx-4'}>
                    Projects
                </CustomLink>
                <CustomLink href={'/articles'} className={'ml-4'}>
                    Articles
                </CustomLink>
            </nav>

            <div className={'-mt-2'}>
                <Logo />
            </div>
            <div
                className={
                    'flex items-center justify-center flex-wrap lg:hidden'
                }
            >
                <SocialIcon href={'https://twitter.com/'}>
                    <TwitterIcon className={`!w-6 mr-3`} />
                </SocialIcon>
                <SocialIcon href={'https://github.com/'}>
                    <GithubIcon className={`!w-6 mx-3`} />
                </SocialIcon>
                <SocialIcon href={'/'}>
                    <LinkedInIcon className={`!w-6 mx-3`} />
                </SocialIcon>
                <SocialIcon href={'/'}>
                    <PinterestIcon
                        className={`!w-6 mx-3 bg-light rounded-full`}
                    />
                </SocialIcon>
                <SocialIcon href={'/'}>
                    <DribbbleIcon className={`!w-6 mx-3`} />
                </SocialIcon>

                <button
                    onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                    className={classNames(
                        'ml-3 flex items-center justify-center rounded-full p-1',
                        {
                            'bg-dark text-light': mode === 'light',
                            'bg-light text-dark': mode === 'dark',
                        },
                    )}
                >
                    {mode === 'dark' ? (
                        <MoonIcon className={'fill-dark'} />
                    ) : (
                        <SunIcon className={'fill-dark'} />
                    )}
                </button>
            </div>
        </header>
    )
}

export default NavBar
