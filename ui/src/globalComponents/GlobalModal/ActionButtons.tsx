import { LoadingSpinner } from "../LoadingSpinner";
import { useGlobalDispatch } from "../../stateProviders/GlobalStateProvider";
import { useState } from "react";

export const ActionButtons:React.FC<{
    confirmCallback:Function,
    confirmButtonStyle:'success' | 'warning', 
    confirmButtonText:string
    confirmDisabled?:boolean
}> = ({confirmCallback,confirmButtonStyle,confirmButtonText, confirmDisabled}) => {
    
    const globalDispatch = useGlobalDispatch();
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(false);
    
    return (
        <div className='flex gap-[20px] flex-wrap'>
            <button onClick={() => {
                globalDispatch({modalOpen:false,modalContent:null})
            }} className='min-w-[100px] border border-black rounded p-[10px] hover:opacity-[0.8] transition-[0.2s]'>
                Cancel
            </button>
            <button disabled={loading || success || error || confirmDisabled} onClick={() => runCallback()} className={`${confirmButtonStyle === 'success' && !error ? 'bg-[green]':'bg-[tomato]'} min-w-[100px] rounded p-[10px] text-white disabled:bg-[lightgrey] enabled:hover:opacity-[0.8] transition-[0.2s] flex justify-center`}>
                {loading 
                    ?   <LoadingSpinner/>
                    :    success 
                            ?   <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                            :   error
                                    ?   <svg fill='white' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                                    :   confirmButtonText
                }
            </button>
        </div>
    )

    async function runCallback(){
        setLoading(true);
        
        confirmCallback()
            .then( () => {
                setLoading(false);
                setSuccess(true);
                setError(false);
                setTimeout( () => {
                    globalDispatch({modalOpen:false,modalContent:null})
                },1000)
            }).catch( (error: any) => {
                console.log(error)
                setLoading(false);
                setSuccess(false);
                setError(true)
            });
    }
}