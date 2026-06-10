import { useEffect, useState } from "react"
import type { APIResult } from "~/types/fetch"

export function useFetch <T> (url: string) : APIResult<T> {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<T | null>(null)

     useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw Error('something was wrong')
                }
                const result = await response.json()
                setData(result)
            } catch (err) {
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    return {
        isLoading,
        data
    }
}