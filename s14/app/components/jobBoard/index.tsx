import type { Job } from "~/types/job"
import List from "~/components/jobBoard/list"
import { useFetch } from '~/hooks/fetch'

export default function () {
    const {isLoading, data: jobs} = useFetch<Job[]>('http://localhost:3001/jobs')

    return <section className="bg-gray-200 min-h-screen">
        <div className="bg-cf-1 text-cf-2 py-2 px-4 text-center">Welcome to CodingFront Jobs</div>
        <div className="container mx-auto">
            {
                isLoading ?
                    <div className="text-lg my-5">Is Loading ...</div>
                    : !jobs || !jobs.length ? 
                        <div>NO Jobs found</div>
                    : <List items={jobs} title="Here are some jobs available: "/>

            }
        </div>
    </section>
}