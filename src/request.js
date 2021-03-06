const APIKEY = "327cf13bdbfc982e237f63c8e4166afc";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/movie?api_key=${APIKEY}&with_genres`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,

}

export default requests;