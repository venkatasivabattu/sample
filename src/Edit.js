import { useState } from "react";


function Edit({i,age,setEdit,setFull,fineditFun}){
    let [edata,setEdata]=useState({
        id: i.id,
		name:i.first+' '+i.last,
		age: age,
		gender: i.gender,
		country: i.country,
		description: i.description    
    })

    function editSetter(k,v){
        setEdata({...edata,[k]:v})
    }

    function editSubmitter(){
        if(edata.name===null || edata.name===''){
            alert("Name should not be empty")
        }
        else if(edata.age==null || edata.age<=0){
                alert("Please enter valid date")
            }
        else if(edata.gender===null||edata.gender===''){
                    alert("gender should not be empty")
                }
        else if(edata.country===null || edata.country===''){
                        alert("country should not be empty")
                }
        else{
                        fineditFun(edata,i)
                        setEdit({
                            flag:false,
                            id:null
                        })
                        setFull({
                            flag:false,
                            id:null
                        })
                        setEdata()
            }
                
    }


return (<>
                <div className="edit">
                    <form>
                        <div id='s1'>
                            <img src={i.picture} width='50px' height='50px'/><span>
                        
                            <input id='name' type='text' placeholder="Enter Full name" value={edata.name} onChange={
                                (e)=>{
                                    editSetter('name',e.target.value)
                                }
                            }/>
            
                        <button onClick={
                            ()=>{
                                setEdit({
                                    flag:false,
                                    id:null
                                })
                                setFull({
                                    flag:false,
                                    id:null
                                })
                                setEdata()
                            }
                        }><i className="fa fa-chevron-up" aria-hidden="true"></i></button>
                    </span>
                    </div>
                    <div id='s2'>
                        <span><h5>Age</h5><input type="number"  value={edata.age} onChange={
                                (e)=>{
                                    editSetter('age',e.target.value)
                                }
                            }/></span>
                        <span><h5>Gender</h5><select value={edata.gender} onChange={
                                (e)=>{
                                    editSetter('gender',e.target.value)
                                }
                            }>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="Rather not say">Rather not say</option>
                            </select></span>
                        <span><h5>Country</h5><input type="text" value={edata.country} onChange={
                                (e)=>{
                                    editSetter('country',e.target.value)
                                }
                            }/></span>
                    </div>
                    <div id='es3'>
                        <h5>Description</h5>
                        <textarea rows='4' value={edata.description} onChange={
                                (e)=>{
                                    editSetter('description',e.target.value)
                                }
                            }></textarea>
                    </div>
                    <div id='s4'>
                        <span>
                        <button id='d' onClick={()=>{
                            setEdit({
                                flag:false,
                                id:null
                            })
                            setFull({
                                flag:false,
                                id:null
                            })
                            setEdata()
                            
                           
                        }}><i class="fa fa-times-circle-o fa-1.5x" aria-hidden="true"></i></button>
                        <button id='e' onClick={
                            (e)=>{
                                e.preventDefault();
                                editSubmitter()
                            }
                        }><i class="fa fa-check-circle-o " aria-hidden="true"></i></button>
                        </span>
                    </div>
                    </form>
                </div>
</>)
}
export default Edit;