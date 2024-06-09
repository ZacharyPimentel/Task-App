import { useCallback } from "react"

export const useApi = () => {
    const apiUrl = ''

    const request = useCallback( async() => {
        await fetch(apiUrl)
    },[apiUrl])

    return {
        sampleController:{
            get: async(id:string) => {}
        }
    }
}