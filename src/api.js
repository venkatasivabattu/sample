export async function getDataf(){
    const data=await fetch('build/data.json')
    
    const d=await data.json()
    
    return d
}
