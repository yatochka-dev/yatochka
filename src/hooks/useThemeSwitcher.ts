import { useEffect, useState } from 'react'

export type TMode = 'light' | 'dark'
const localStorageKEY = 'theme'

export default function useThemeSwitcher() {
    const [mode, setMode] = useState<TMode | ''>('')

    function saveMode(mode: TMode) {
        window.localStorage.setItem(localStorageKEY, mode)

        if (mode === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    useEffect(() => {
        const userPreference = window.localStorage.getItem(localStorageKEY)
        let check: TMode = userPreference === 'dark' ? 'dark' : 'light'
        setMode(check)

        if (check === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    return {
        mode,
        setMode: (mode: TMode) => {
            if (mode !== 'light' && mode !== 'dark') {
                throw new Error('Invalid mode')
            }
            saveMode(mode)
            setMode(mode)
        },
    }
}
