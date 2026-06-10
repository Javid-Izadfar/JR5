import type { Job } from "~/types/job"

const Item = ({ job }: { job: Job}) => {
    return <li className="bg-white rounded-xl shadow px-4 py-3 relative transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
            <span className="block font-bold text-2xl">{ job.title }</span>
            <span>at <i className="opacity-70">{job.company}</i></span>
            <span className="absolute right-4 bottom-3">Salary Starts at: <b>${job.salary}k</b></span>
        </li>
}

const List = ({ title, items}: {title: string, items: Job[]}) => {
    return <>
        <p className="my-2">{ title }</p>
        <ul className="text-cf-2 flex flex-col gap-3">
            {
                items.map((job) => <Item key={job.id} job={job}/>)
            }
        </ul>
    </>
}

export default List