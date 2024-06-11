import { ReactNode } from "react"

export const Auth:React.FC<{children:ReactNode}> = ({children}) => {
    return (
        <div>{children}</div>
    )
}