import { ActionButtons } from "../ActionButtons";

export const TestModal = () => {
    
    return (
        <div className='flex flex-col gap-[20px]'>
            <p className='font-bold'>This is a test modal.</p>
            <ActionButtons
                confirmButtonStyle="success"
                confirmButtonText="Create"
                confirmCallback={async() => {
                    console.log('confirm was called')
                }}
            />
        </div>
    )
}