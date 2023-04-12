import React, { useRef } from 'react'
import { motion } from 'framer-motion'

interface SkillsProps {}

interface SkillType {
    name: string
    position: { x: string; y: string }
}

const skills: SkillType[] = [
    { name: 'HTML', position: { x: '-25vw', y: '2vw' } },
    { name: 'CSS', position: { x: '-5vw', y: '-11vw' } },
    { name: 'JavaScript & Typescript', position: { x: '20vw', y: '6vw' } },
    { name: 'ReactJS', position: { x: '0vw', y: '12vw' } },
    { name: 'NextJS', position: { x: '-20vw', y: '-15vw' } },
    { name: 'SvelteKit', position: { x: '15vw', y: '-12vw' } },
    { name: 'TailwindCSS', position: { x: '32vw', y: '-5vw' } },
    { name: 'Figma', position: { x: '0vw', y: '-20vw' } },
    { name: 'Python', position: { x: '-25vw', y: '18vw' } },
]

const Skill: React.FC<
    {
        index: number
    } & SkillType
> = ({ position, name, index }) => {
    return (
        <>
            <motion.div
                className={`xs:text-text-dark absolute flex cursor-pointer items-center justify-center rounded-full bg-dark bg-light px-6 py-3 font-semibold text-light shadow-dark dark:text-dark lg:px-4 lg:py-2 md:px-3 md:py-1.5 md:text-sm xs:bg-transparent xs:font-bold xs:dark:bg-transparent xs:dark:text-light`}
                whileHover={{ scale: 1.05 }}
                initial={{
                    x: 0,
                    y: 0,
                    scale: 0,
                }}
                whileInView={{
                    x: position.x,
                    y: position.y,
                    scale: 1,
                    transition: {
                        duration: 1.5,
                        delay: index * 0.08,
                    },
                }}
                viewport={{ once: true }}
            >
                {name}
            </motion.div>
        </>
    )
}

const Skills: React.FC<SkillsProps> = () => {
    const skillsWithDistance = skills.map((skill) => ({
        ...skill,
        distance: Math.sqrt(
            Math.pow(parseInt(skill.position.x), 2) +
                Math.pow(parseInt(skill.position.y), 2),
        ).toFixed(2),
    }))

    const sortedByDistance = skillsWithDistance.sort((a, b) => {
        const aDistance = parseFloat(a.distance)
        const bDistance = parseFloat(b.distance)

        // the most distant skill should be rendered last

        if (aDistance > bDistance) return 1
        if (aDistance < bDistance) return -1

        return 0
    })

    const skillsRef = useRef(sortedByDistance)

    return (
        <>
            <h2
                className={
                    'mt-64 w-full text-center text-8xl font-bold md:mt-32 md:text-6xl'
                }
            >
                Skills
            </h2>
            <div
                className={
                    'xs:h[50svh] relative flex h-screen w-full items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80svh] sm:h-[60svh] ' +
                    'lg:bg-circularLightLg lg:dark:bg-circularDarkLg' +
                    'md:bg-circularLightMd md:dark:bg-circularDarkMd' +
                    'sm:bg-circularLightSm sm:dark:bg-circularDarkSm'
                }
            >
                <motion.div
                    className={
                        'flex cursor-pointer items-center justify-center rounded-full bg-dark bg-light p-8 font-semibold text-light shadow-dark dark:text-dark lg:p-6 md:p-4 xs:p-2 xs:text-xs'
                    }
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                {/*<Skill name={'HTML'} position={{ x: '-25vw', y: '2vw' }} />*/}

                {/*<Skill*/}
                {/*    name={'CSS'}*/}
                {/*    position={{*/}
                {/*        x: '-5vw',*/}
                {/*        y: '-11vw',*/}
                {/*    }}*/}
                {/*/>*/}

                {/*<Skill*/}
                {/*    name={'JavaScript & Typescript'}*/}
                {/*    position={{ x: '20vw', y: '6vw' }}*/}
                {/*/>*/}
                {/*<Skill name={'ReactJS'} position={{ x: '0vw', y: '12vw' }} />*/}
                {/*<Skill name={'NextJS'} position={{ x: '-20vw', y: '-15vw' }} />*/}
                {/*<Skill*/}
                {/*    name={'SvelteKit'}*/}
                {/*    position={{ x: '15vw', y: '-12vw' }}*/}
                {/*/>*/}
                {/*<Skill*/}
                {/*    name={'TailwindCSS'}*/}
                {/*    position={{ x: '32vw', y: '-5vw' }}*/}
                {/*/>*/}
                {/*<Skill name={'Figma'} position={{ x: '0vw', y: '-20vw' }} />*/}
                {/*<Skill name={'Python'} position={{ x: '-25vw', y: '18vw' }} />*/}

                {skillsRef.current.map((skill, index) => (
                    <Skill key={index} index={index} {...skill} />
                ))}
            </div>
        </>
    )
}

export default Skills
