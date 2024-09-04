import CardMovie from "./CardMovie"

const ListMovies=({movies,searchT,rateT})=>{
    return(
        <div className="centerCard">
            {
                movies.filter((el,i,t)=> el.title.toUpperCase().includes(searchT.toUpperCase()) && el.rating >= rateT).map((el,i,t)=> <CardMovie key={el.id} el={el}/>)
            }
        </div>
    )
}

export default ListMovies