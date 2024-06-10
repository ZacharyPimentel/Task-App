import { useCallback } from "react"

export const useApi = () => {
    const apiUrl = import.meta.env.VITE_API_URL
    console.log(apiUrl)

    const request = useCallback( async() => {
        await fetch(apiUrl)
    },[apiUrl])

    return {
        sampleController:{
            get: async(id:string) => {}
        }
    }
}