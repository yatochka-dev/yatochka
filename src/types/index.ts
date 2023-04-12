// for react.FC

import React from 'react'

export interface WithChildren {
    children: React.ReactNode
}

export interface WithNonReqChildren {
    children?: React.ReactNode
}
