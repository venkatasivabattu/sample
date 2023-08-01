import Delete from "./Delete";
import Edit from "./Edit";


function Item({i,full,setFull,del,setDel,delfun,edit,setEdit,fineditFun}){
    let age;
    if(i.age!==undefined){
        age=i.age
    }
    else{
        let dob=i.dob;
    dob=new Date(dob)
    age=((new Date()).getFullYear()-dob.getFullYear())
    }
    
    
    return (
        <>
        
        {(!full.flag || (!!full.flag && full.id!==i.id) ) && <div className="normal">
            <img src={i.picture} width='50px' height='50px'/><span>
                <h3>{i.first} {i.last}</h3><button onClick={
                    ()=>{
                        if(!edit.flag){
                            setFull({
                                flag:true,
                                id:i.id
                            })
                        }
                    }
                }><i class="fa fa-chevron-down" aria-hidden="true"></i></button>
            </span>
            </div>}
            {
               ( (!!full.flag && full.id===i.id) && (!edit.flag && edit.id!==i.id))&& <div className="full">
                    <div id='s1'>
                            <img src={i.picture} width='50px' height='50px'/><span>
                        <h3>{i.first} {i.last}</h3><button onClick={
                            ()=>{
                                setFull({
                                    flag:false,
                                    id:null
                                })
                            }
                        }><i className="fa fa-chevron-up" aria-hidden="true"></i></button>
                    </span>
                    </div>
                    <div id='s2'>
                        <span><h5>Age</h5><p>{age}</p></span>
                        <span><h5>Gender</h5><p>{i.gender}</p></span>
                        <span><h5>Country</h5><p>{i.country}</p></span>
                    </div>
                    <div id='s3'>
                        <h5>Description</h5>
                        <p>{i.description}</p>
                    </div>
                    <div id='s4'>
                        <span>
                        <button id='d' onClick={()=>{
                            
                           setDel({
                            flag:true,
                            id:i.id
                           });
                        }}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                        <button id='e' disabled={age<=17} onClick={
                            ()=>{
                                setEdit({
                                    flag:true,
                                    id:i.id
                                })
                            }
                        }><i class="fa fa-pencil" aria-hidden="true"></i></button>
                        </span>
                    </div>
                </div>
            }
            {(!!del.flag && del.id===i.id && (!edit.flag)) && <Delete id={i.id} setDel={setDel} delfun={delfun} />}
            {(!!edit.flag && edit.id===i.id) && <Edit i={i} age={age} setEdit={setEdit} setFull={setFull} fineditFun={fineditFun}/>}
        
        </>


    )
}
export default Item;