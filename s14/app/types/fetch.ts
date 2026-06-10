export type APIResult <DataType> = {
    data: DataType | null
    isLoading: boolean
}