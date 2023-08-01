export async function getDataf(){
    const data=await fetch('/data.json')
    
    const d=await data.json()
    
    return d
}