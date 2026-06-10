export type Job = {
    id: string
    title: string
    company: string
    location: string
    type: 'full' | 'part'
    remote: boolean
    salary: number
}