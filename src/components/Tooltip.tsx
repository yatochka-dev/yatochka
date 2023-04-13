import React from 'react'
import { WithChildren } from '@/types'

const Tooltip: React.FC<
    WithChildren & { title: string; className?: string }
> = ({ title, children, className }) => {
    return (
        <div className="relative inline-block">
            <div className={`peer cursor-pointer ${className ?? ''}`}>
                {children}
            </div>
            {/*<motion.div*/}
            {/*    initial={{ opacity: 0, scale: 0.9 }}*/}
            {/*    animate={{ opacity: 1, scale: 1 }}*/}
            {/*    exit={{ opacity: 0, scale: 0.9 }}*/}
            {/*    whileHover={{ opacity: 1, scale: 1 }}*/}
            {/*    transition={{ duration: 0.2 }}*/}
            {/*    className="absolute left-0 top-0 mt-6 whitespace-nowrap rounded-md bg-black p-2 text-sm text-white shadow-lg"*/}
            {/*>*/}
            {/*    {title}*/}
            {/*</motion.div>*/}
            <div
                className={
                    'translate-center absolute z-10 mt-6 !-translate-y-0 scale-90 whitespace-nowrap rounded bg-dark/90 p-2 text-base font-medium text-light/95 opacity-0 shadow-lg backdrop-blur-2xl peer-hover:scale-100 peer-hover:opacity-100' +
                    ' transition-all duration-200 dark:bg-light/75 dark:text-dark'
                }
            >
                {title}
            </div>
        </div>
    )
}

export default Tooltip
