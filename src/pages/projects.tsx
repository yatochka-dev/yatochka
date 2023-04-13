import React from 'react'
import Head from 'next/head'
import { Layout } from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'

import ProjectImage from '@/public/images/projects/crypto-screener-cover-image.jpg'
import PageTransition from '@/components/PageTransition'
import { NextPage } from 'next'
import { Project } from '@prisma/client'
import { prisma } from '@/server/db'
import { deserialize, serialize } from 'superjson'
import { SuperJSONResult } from 'superjson/src/types'
import { ProjectCard } from '@/components/ProjectCard'

interface ProjectsPageProps {
    projects: Project[]
}

export async function getServerSideProps() {
    const projects = await prisma.project.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    })

    // await prisma.project.createMany({
    //     data: [
    //         {
    //             title: 'Crypto Screener Application',
    //             summary:
    //                 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \n' +
    //                 'It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \n' +
    //                 'local currency.',
    //
    //             githubPath: 'yatochka-dev/crypto-screener',
    //             featured: true,
    //             imageUrl:
    //                 'https://i.ibb.co/0nZ6Z3T/crypto-screener-cover-image.jpg',
    //         },
    //         {
    //             title: 'Crypto Screener Application',
    //             summary:
    //                 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \n' +
    //                 'It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \n' +
    //                 'local currency.',
    //
    //             githubPath: 'yatochka-dev/crypto-screener',
    //             featured: false,
    //             imageUrl:
    //                 'https://i.ibb.co/0nZ6Z3T/crypto-screener-cover-image.jpg',
    //         },
    //         {
    //             title: 'Crypto Screener Application',
    //             summary:
    //                 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \n' +
    //                 'It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \n' +
    //                 'local currency.',
    //
    //             githubPath: 'yatochka-dev/crypto-screener',
    //             featured: false,
    //             imageUrl:
    //                 'https://i.ibb.co/0nZ6Z3T/crypto-screener-cover-image.jpg',
    //         },
    //         {
    //             title: 'Crypto Screener Application',
    //             summary:
    //                 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \n' +
    //                 'It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \n' +
    //                 'local currency.',
    //
    //             githubPath: 'yatochka-dev/crypto-screener',
    //             featured: true,
    //             imageUrl:
    //                 'https://i.ibb.co/0nZ6Z3T/crypto-screener-cover-image.jpg',
    //         },
    //         {
    //             title: 'Crypto Screener Application',
    //             summary:
    //                 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \n' +
    //                 'It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \n' +
    //                 'local currency.',
    //
    //             githubPath: 'yatochka-dev/crypto-screener',
    //             featured: false,
    //             imageUrl:
    //                 'https://i.ibb.co/0nZ6Z3T/crypto-screener-cover-image.jpg',
    //         },
    //         {
    //             title: 'Crypto Screener Application',
    //             summary:
    //                 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \n' +
    //                 'It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \n' +
    //                 'local currency.',
    //
    //             githubPath: 'yatochka-dev/crypto-screener',
    //             featured: false,
    //             imageUrl:
    //                 'https://i.ibb.co/0nZ6Z3T/crypto-screener-cover-image.jpg',
    //         },
    //         {
    //             title: 'Crypto Screener Application',
    //             summary:
    //                 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \n' +
    //                 'It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \n' +
    //                 'local currency.',
    //
    //             githubPath: 'yatochka-dev/crypto-screener',
    //             featured: true,
    //             imageUrl:
    //                 'https://i.ibb.co/0nZ6Z3T/crypto-screener-cover-image.jpg',
    //         },
    //         {
    //             title: 'Crypto Screener Application',
    //             summary:
    //                 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \n' +
    //                 'It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \n' +
    //                 'local currency.',
    //
    //             githubPath: 'yatochka-dev/crypto-screener',
    //             featured: false,
    //             imageUrl:
    //                 'https://i.ibb.co/0nZ6Z3T/crypto-screener-cover-image.jpg',
    //         },
    //         {
    //             title: 'Crypto Screener Application',
    //             summary:
    //                 'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \n' +
    //                 'It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \n' +
    //                 'local currency.',
    //
    //             githubPath: 'yatochka-dev/crypto-screener',
    //             featured: false,
    //             imageUrl:
    //                 'https://i.ibb.co/0nZ6Z3T/crypto-screener-cover-image.jpg',
    //         },
    //     ],
    // })

    // I want to sort projects by createdAt, and cut the array to 6 items, 2 featured and 4 not featured, and their order should 1 featured, 2 not featured, 1 featured, 2 not featured

    const featuredProjects = projects.filter((project) => project.featured)
    const notFeaturedProjects = projects.filter((project) => !project.featured)

    const rightOrder = [
        ...featuredProjects.slice(0, 1),
        ...notFeaturedProjects.slice(0, 2),
        ...featuredProjects.slice(1, 2),
        ...notFeaturedProjects.slice(2, 4),
    ]

    const props: ProjectsPageProps = { projects: rightOrder }
    const { json, meta } = serialize(props)
    return {
        props: {
            json,
            meta,
        },
    }
}

const Projects: NextPage<SuperJSONResult> = ({ json, meta }) => {
    const { projects } = deserialize<ProjectsPageProps>({ json, meta })

    console.log(projects)
    return (
        <>
            <Head>
                <title>Yatochka | Projects Page</title>
                <meta name="description" content="About page" />
            </Head>
            <PageTransition />

            <main
                className={
                    'mb-16 flex w-full flex-col items-center justify-center'
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
                            'gird-cols-12 grid gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'
                        }
                    >
                        {projects.map((project, index) => (
                            <ProjectCard
                                type={''}
                                title={project.title}
                                image={project.imageUrl}
                                link={project.link ?? undefined}
                                githubLink={`https://github.com/${project.githubPath}`}
                                featured={project.featured}
                                summary={project.summary ?? undefined}
                            ></ProjectCard>
                        ))}
                    </div>
                    {/*    <div className={'col-span-12'}>*/}
                    {/*        <ProjectCard*/}
                    {/*            featured*/}
                    {/*            title={'Crypto Screener Application'}*/}
                    {/*            summary={*/}
                    {/*                'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \n' +*/}
                    {/*                'It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \n' +*/}
                    {/*                'local currency.'*/}
                    {/*            }*/}
                    {/*            link={'/'}*/}
                    {/*            githubLink={'https://github.com'}*/}
                    {/*            image={ProjectImage}*/}
                    {/*            type={'Featured Project'}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className={'col-span-6 sm:col-span-12'}>*/}
                    {/*        <ProjectCard*/}
                    {/*            title={'Crypto Screener Application'}*/}
                    {/*            link={'/'}*/}
                    {/*            githubLink={'https://github.com'}*/}
                    {/*            image={ProjectImage}*/}
                    {/*            type={'Featured Project'}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className={'col-span-6 sm:col-span-12'}>*/}
                    {/*        <ProjectCard*/}
                    {/*            title={'Crypto Screener Application'}*/}
                    {/*            link={'/'}*/}
                    {/*            githubLink={'https://github.com'}*/}
                    {/*            image={ProjectImage}*/}
                    {/*            type={'Featured Project'}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className={'col-span-12'}>*/}
                    {/*        <ProjectCard*/}
                    {/*            featured*/}
                    {/*            title={'Crypto Screener Application'}*/}
                    {/*            summary={*/}
                    {/*                'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \n' +*/}
                    {/*                'It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \n' +*/}
                    {/*                'local currency.'*/}
                    {/*            }*/}
                    {/*            link={'/'}*/}
                    {/*            githubLink={'https://github.com'}*/}
                    {/*            image={ProjectImage}*/}
                    {/*            type={'Featured Project'}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className={'col-span-6 sm:col-span-12'}>*/}
                    {/*        <ProjectCard*/}
                    {/*            title={'Crypto Screener Application'}*/}
                    {/*            link={'/'}*/}
                    {/*            githubLink={'https://github.com'}*/}
                    {/*            image={ProjectImage}*/}
                    {/*            type={'Featured Project'}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className={'col-span-6 sm:col-span-12'}>*/}
                    {/*        <ProjectCard*/}
                    {/*            title={'Crypto Screener Application'}*/}
                    {/*            link={'/'}*/}
                    {/*            githubLink={'https://github.com'}*/}
                    {/*            image={ProjectImage}*/}
                    {/*            type={'Featured Project'}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </Layout>
            </main>
        </>
    )
}

export default Projects
