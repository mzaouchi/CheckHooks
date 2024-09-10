import CardMovie from "./CardMovie"

const ListMovies=({movies,searchT,rateT})=>{

    var x = movies.filter((el,i,t)=> el.title.toUpperCase().includes(searchT.toUpperCase()) && el.rating >= rateT)
                
    return(
        <div className="centerCard">
            {
                
                x.length === 0 ? <h1>Not Found</h1> : x.map((el,i,t)=> <CardMovie key={el.id} el={el}/>)
                
                
            }
        </div>
    )
}

export default ListMovies