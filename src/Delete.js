import {createPortal} from 'react-dom'
function Delete({id,setDel,delfun}){
    
return (
    createPortal(<>
    <div className='delete'>
        <div className='ddiv'>
            <span id='ds1'>
                <p>Are you sure you want to delete?</p>
                <button onClick={
                    ()=>{
                        setDel({
                            flag:false,
                            id:null
                        })
                    }
                }>X</button>
            </span>
            <span id="ds2">
                <button 
                        onClick={
                            ()=>{
                                setDel({
                                    flag:false,
                                    id:null
                                })
                            }
                        }
                >Cancel</button>
                <button onClick={
                    ()=>{
                        setDel({
                            flag:false,
                                id:null
                        })
                        delfun(id)
                    }
                }>Delete</button>
            </span>
        </div>
    </div></>,document.body)
)}
export default Delete;