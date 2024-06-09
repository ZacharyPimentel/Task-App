import { TestModal } from "../../globalComponents/GlobalModal/modalContent/TestModal"
import { useGlobalDispatch } from "../../stateProviders/GlobalStateProvider"

export const HomePage = () => {

    const globalDispatch = useGlobalDispatch()

    return (
        <div>
            <div>This is the home page.</div>
            <button 
                className='border border-black'
                onClick={() => globalDispatch({modalOpen:true,modalContent:<TestModal/>})}
            >
                Open Global Modal
            </button>
        </div>
        
    )
}