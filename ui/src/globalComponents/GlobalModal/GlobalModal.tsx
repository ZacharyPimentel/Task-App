import {useEffect, useRef} from "react";
import { useGlobalState,useGlobalDispatch } from "../../stateProviders/GlobalStateProvider";
export const GlobalModal = () => {
    const globalState = useGlobalState();
    const globalDispatch = useGlobalDispatch();

    const modalRef = useRef<HTMLDialogElement | null>(null)

    useEffect( () => {
        //hide or show modal depending on state
        if(globalState.modalOpen){
            modalRef.current && modalRef.current.showModal();
        }else{
            modalRef.current && modalRef.current.close()
        }
    },[globalState.modalOpen])
    

    return (
        <dialog className='modal-dialog shadow-lg p-[20px] w-[90%] max-w-[768px] relative' ref={modalRef}>
            <button onClick={() => {globalDispatch({modalContent:null,modalOpen:false})}} className='absolute top-[20px] right-[20px] z-10'>
                <svg className='w-[20px] h-[20px] hover:fill-[tomato] transition-[0.2s]' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
            </button>
            {globalState.modalContent}
        </dialog>
    )
}