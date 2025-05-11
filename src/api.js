const API_KEY = "479ce603b32f77655f201728e7cfa181";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
      'api_key': API_KEY,
    },
});
  


const getTrendingMovies = async ()=>{
    try {
        const { data } = await api.get("trending/movie/day");
        return data.results;
    } catch (error) {
        console.error(error.response.data);
    }
}

const getCategoriesMovies = async ()=>{
    try {
        const { data } = await api.get("genre/movie/list");
        return data.genres;

    } catch (error) {
        console.error(error.response.data)
    }
}

getCategoriesMovies()