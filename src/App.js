import { useEffect, useState } from "react";
import { getDataf } from "./api";
import './App.css';
import ViewData from "./ViewData";

function App(){
  let [data,setdata]=useState();
  let [odata,setOdata]=useState();


  useEffect(()=>{
    getData()
  },[]);

  async function getData(){
    let d=await getDataf()
    setdata(d)
    setOdata(d)
    
  }
  
  
  return (
    <>{!data && <h1 id='l'>Loading......</h1>}
    {!!data && <ViewData data={data} id={1} setdata={setdata} getData={getData} odata={odata} setOdata={setOdata} />}
    </>
  )
}

export default App;
