import { useNavigate, useParams } from "react-router-dom"

const DescMovie=({movies})=>{
    const {id} = useParams()
    const found = movies.find((el,i,t)=> el.id == id)
    const navigate = useNavigate()
    return(
        <div>
            <h1>{found.title}</h1>
            {found.trailler}
            <button onClick={()=> navigate('/PageMovies')}>Home</button>
        </div>
    )
}

export default DescMovie