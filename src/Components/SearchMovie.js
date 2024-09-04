import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap';
const SearchMovie=({setSearchT,setRateT,searchT, rateT})=>{
    const handleReset=()=>{
        setSearchT('')
        setRateT(0)
    }
    return(
        <div className='search'>
            <input value={searchT} type="text" onChange={(e)=>setSearchT(e.target.value)}/>
            <Rating value={rateT} onChange={(e)=> setRateT(e.target.value)}/>     
            <Button variant="outline-warning" onClick={handleReset}>Reset</Button>
        </div>
    )
}

export default SearchMovie