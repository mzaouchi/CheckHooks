import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';

const CardMovie=({el})=>{

    const [readMore, setReadMore] = useState(false)

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={el.posterURL} style={{width:'286px',height:'406px'}}/>
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