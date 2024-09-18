import { createClient } from 'next-sanity'

const config = {
    projectId: process.env.NEXT_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_SANITY_DATASET,
    apiVersion: '2024-01-01',
    useCdn: false,
}

export const client = createClient(config)
