import React from 'react'
import { LinkProps as LP } from 'next/link'
import L from 'next/link'

interface LinkProps extends LP {
    newTab?: boolean
}

const Link = ({ newTab, ...props }: LinkProps) => {
    if (newTab) {
        // remove the newTab, target & rel prop from the props object

        return <L {...props} target={'_blank'} rel={'noreferrer'} />
    }
    return <L {...props} />
}

export default Link
