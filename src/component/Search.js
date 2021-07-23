import queryString from 'query-string'

function Search(props){
    console.log("...........",props);
    var query = queryString.parse(props.location.search)
    console.log(query);
    return(
        <div class="">
            <h1>Search here {query.q}</h1>
        </div>
    )
}
export default Search