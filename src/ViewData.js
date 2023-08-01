import { useState } from "react";
import Item from "./Item";

function ViewData({data,setdata,getData,odata,setOdata}){
    
    let [full,setFull]=useState({
        flag:false,
        id:null
    })
    let [del,setDel]=useState({
        flag:false,
        id:null
    });
    let [edit,setEdit]=useState({
        flag:false,
        id:null
    });

    function dataFilter(x){
        console.log(x,'ihhii')
        let search=x.trim()
        if(search!==null||search.trim()!==''){
            const d=odata.filter((i)=>{
                return (i.first.toLowerCase().match(search.toLowerCase())||i.last.toLowerCase().match(search.toLowerCase())||((i.first+' '+i.last).toLowerCase().match(search.toLowerCase())))
            })
            setdata(d)
        }
        else{
            setdata(odata)
        }
    }

    function delItem(id){
        const d=data.filter((i)=>{
            return i.id!==id;
        })
        setdata(d)
        setOdata(d)

    }
    function fineditFun(x,y){
        let d=x.name.split(' ')
        let first='';
        for(let i=0;i<d.length-1;i++){
            first=first+' '+d[i]
        }
        first=first.trim()
        let last=d[d.length-1]
        
        let fdata={...y,
            id:x.id,
            first:first,
            last:last,
            age:x.age,
            gender:x.gender,
            country:x.country,
            description:x.description
        }
        const fd=odata.filter((i)=>{
            return i.id!==fdata.id
        })
        fdata=[fdata,...fd]
        
        setdata(fdata)
        setOdata(data)

    }




    return (
        <div className="body">
            <div className="container">
                <div className="form">
                    
                    <input type='search'  placeholder="Search user" onChange={
                        (e)=>{
                            
                            dataFilter(e.target.value)
                           
                        }
                    }   />
                    
                </div>
                <div className="data">
                    {
                        data.map((i)=>{
                            return (<div className="item"><Item i={i} full={full} setFull={setFull} del={del} setDel={setDel}key={i.id} delfun={delItem} edit={edit} setEdit={setEdit} fineditFun={fineditFun}/></div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default ViewData;