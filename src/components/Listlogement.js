import  { useEffect, useState } from "react";
import Logement from "./Logement";
import {useDispatch} from 'react-redux'
import {setlogementsData} from '../Features/Logements.slice'


const Listlogement = () => { 

      
        const data=[ 
                {
                    nom:'logement1',
                    type:'studio',
                    id:1
                },
                {
                    nom:'logement2',
                    type:'appartement',
                    id:2   
                },
                {
                    nom:'logement3',
                    type:'villa',
                    id:3,    
                }
            ]

        const [logements, setLogements] = useState({})
     
        const dispatch = useDispatch()
    useEffect(() => {
        setLogements(data)
        dispatch(setlogementsData(data))

    }, [dispatch])

    
    

        return (
            
            <div>
                {
                    data.map((el, index) => (
                        <Logement value={el} key={index} />
                    ))
                }
            </div>

        )
    

}
export default Listlogement