import './card.css'

interface Props{
    name:string,
    status:string,
    species:string, 
    gender:string,
    image:string
}


function Card({name, status, species, gender, image}:Props){
    return(
        <>
            <div className={`cont ${status.toLowerCase()}`}>

               

                    <div className="image"><img src={image} alt="" /></div>

                    <div className="info">
                        
                        <p className='name'>{name}</p>
                        <div className='specGen'>
                            <p className='specie'>{species}</p>
                            <p className='gender'>{gender}</p>
                        </div>
                    </div>
                
            </div>

        </>
    )

}

export default Card