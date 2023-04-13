import React from 'react'
import { StaticImageData } from 'next/image'
import classNames from 'classnames'
import Link from 'next/link'
import { ScaleImage } from '@/components/ScaleImage'
import { GithubIcon } from '@/components/Icons'
import Tooltip from '@/components/Tooltip'
import { useRouter } from 'next/router'

export const ProjectCard: React.FC<{
    type: string
    title: string
    summary?: string
    image: StaticImageData | string
    link?: string
    githubLink: string
    featured?: boolean
}> = ({ type, title, summary, image, link, githubLink, featured }) => {
    const noLink =
        link === undefined || link === null || link === '#' || link === ''

    const router = useRouter()

    const linkProps = {
        href: link ?? router.asPath,
        target: noLink ? undefined : '_blank',
        rel: noLink ? undefined : 'noreferrer',
    }
    return (
        <div
            className={classNames({
                'col-span-12': featured,
                'col-span-6 sm:col-span-12': !featured,
            })}
        >
            <article
                className={classNames(
                    'relative flex w-full items-center border border-solid border-dark bg-light dark:border-light dark:bg-dark',
                    {
                        'justify-between rounded-3xl rounded-br-2xl p-12 shadow-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4':
                            featured,
                        'flex-col justify-center rounded-2xl p-6 xs:p-4':
                            !featured,
                    },
                )}
            >
                <div
                    className={classNames(
                        'absolute -right-4 top-0 -z-10 h-[103%] w-[101%] rounded-br-3xl bg-dark dark:bg-light',
                        {
                            'rounded-[2.5rem] sm:h-[102%] xs:-right-2 xs:w-full xs:rounded-[1.5rem]':
                                featured,
                            'rounded-[2rem] md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]':
                                !featured,
                        },
                    )}
                />
                <Link
                    {...linkProps}
                    className={classNames(
                        'cursor-pointer overflow-hidden rounded-lg',
                        {
                            'w-1/2 lg:w-full': featured,
                            'w-full': !featured,
                            '!cursor-default': noLink,
                        },
                    )}
                >
                    <ScaleImage
                        src={image}
                        alt={title}
                        className={'h-auto max-h-[350px] w-full '}
                        priority={featured}
                        fill={typeof image === 'string'}
                    />
                </Link>

                <div
                    className={classNames(
                        'flex flex-col items-start justify-between',
                        {
                            'w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6': featured,
                            'mt-4 w-full': !featured,
                        },
                    )}
                >
                    <span
                        className={classNames(
                            'text-xl font-medium text-primary dark:text-primaryDark',
                            {
                                'xs:text-base': featured,
                                'lg:text-lg md:text-base': !featured,
                            },
                        )}
                    >
                        {type}
                    </span>
                    <Link
                        {...linkProps}
                        className={'underline-offset-2 hover:underline'}
                    >
                        <h2
                            className={classNames(
                                'dark:ease my-2 w-full text-left font-bold dark:text-light dark:no-underline dark:transition-colors dark:duration-200 hover:dark:text-light/75',
                                {
                                    'text-4xl sm:text-sm': featured,
                                    'text-3xl lg:text-2xl': !featured,
                                    '!cursor-default !no-underline hover:text-dark hover:dark:!text-light':
                                        noLink,
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
                            'w-full flex-row-reverse justify-between':
                                !featured,
                            '!flex-row': !featured && noLink,
                        })}
                    >
                        <Link
                            href={githubLink}
                            target={'_blank'}
                            rel={'noreferrer'}
                            className={classNames('dark:text-light', {
                                'w-10': featured,
                                'w-8 md:w-6': !featured,
                                '!self-start': !featured && noLink,
                            })}
                        >
                            <GithubIcon />
                        </Link>
                        <Tooltip
                            title={'This project is not yet available to visit'}
                        >
                            <Link
                                {...linkProps}
                                className={classNames('text-lg font-semibold', {
                                    'ml-4 rounded-lg bg-dark p-2 px-6 text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base':
                                        featured,
                                    'underline dark:text-light md:text-base':
                                        !featured,
                                    '!cursor-default': noLink,
                                    hidden: !featured && noLink,
                                    'cursor-not-allowed !bg-dark/75 text-light/75 dark:!bg-light/75 dark:text-dark/75':
                                        featured && noLink,
                                })}
                            >
                                Visit&nbsp;{featured ? 'Project' : null}
                            </Link>
                        </Tooltip>
                    </div>
                </div>
            </article>
        </div>
    )
}
