import { ReactNode } from "react"

export type GlobalState = {
    modalOpen:boolean
    modalContent: ReactNode | null
}