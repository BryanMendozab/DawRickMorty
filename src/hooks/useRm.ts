import { useEffect, useState } from "react"

import type {Rm} from '../types'


const useRm=()=>{

    //Crear la constante para guardar los datos que extraeremos de la API
    const [rm, setRm]=useState<Rm[]>([])

    //Traer las cosas con un asyng
    const traerInfo = async()=>{
        try{
            const respuesta = await fetch("https://rickandmortyapi.com/api/character/?page=19")
            const datos = await respuesta.json()

            //Crear listado
            // Lista para guardar la info
            const listado = datos.results.map((p:any, index:number)=>({
                id:index+1,
                name:p.name,
                status:p.status,
                species:p.species,
                gender:p.gender,
                image:p.image

            }))

            setRm(listado)

        }catch(e){
            console.log("Error al traer los datos",e)
        }
    }

        useEffect(()=>{
            traerInfo()
        }, [])

        return(
            rm
        )  
   
}
export default useRm