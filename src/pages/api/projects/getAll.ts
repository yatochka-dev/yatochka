// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/server/db'
import { Project } from '@prisma/client'

type Data = {
    projects: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const projects = await prisma.project.findMany()

    res.status(200).json({
        projects,
    })
}
