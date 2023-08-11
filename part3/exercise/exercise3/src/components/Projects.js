import data from './data.json';
import {useState} from 'react';


export default function MyProjects(){
const [index, setIndex] = useState(0);
    function handleClick() {
        if (index < data.projects.length-1)
        {
            setIndex(index + 1);
        }else 
        {
            setIndex(0);
        }
    }
    return (
        <div>
        
        <img src={data.projects[index].url} alt={data.projects[index].alt} className='pics'/>
        <div>
        <ul className='list'>
            <li>{data.projects[index].name}</li>
            <li>Photographer: {data.projects[index].photographer}</li>
        </ul>
        <button onClick={handleClick}>Next</button>
        </div>
        </div>
    )
}