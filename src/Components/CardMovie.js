import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CardMovie=({el})=>{

    const [readMore, setReadMore] = useState(false)

    return(
        <Card style={{ width: '18rem' }}>
            <Link to={`/DescMovie/${el.id}`}>
             <Card.Img variant="top" src={el.posterURL} style={{width:'286px',height:'406px'}}/>
            </Link>           
            <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                    {readMore ? el.description : `${el.description.substring(0, 15)}...`}
                    <button className={readMore ? 'less' : 'more'} onClick={()=>setReadMore(!readMore)}>{readMore ? 'Show Less' : 'Show More'}</button>
                    {/* {el.description} */}
                    <br/>
                    <Rating name="read-only" value={el.rating} readOnly />
                    
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardMovie