// import { useState } from 'react'
import './App.css'
import {Card} from './components'
import {useRm} from './hooks'

function App() {

    const rm = useRm()

    return (
        <>

        <p className='title'>Rick & Morty</p>
        
        <div className='colores '>
            <div style={{display:"flex"}}>
                <p>Muerto     </p> 
                <div className='colordotgray'></div>
            </div>
            <div style={{display:"flex"}}> 
                <p>Vivo </p>
                <div className='colordotgreen'></div>
            </div>
            <div style={{display:"flex"}}>
                <p> Unknown</p>
                <div className='colordotblue'></div>
            </div>
        </div>

        
        <div className='cont-general'>
            <div className='cont2'>

            {rm.map((p)=>(
                <Card
                key={p.id}
                name={p.name}
                status={p.status}
                species={p.species} 
                gender={p.gender}
                image={p.image}
                />

            ))}
            </div>
        </div>

        </>
    )

}

export default App
