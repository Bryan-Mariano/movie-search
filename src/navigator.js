

const homePage = async ()=>{
    const movies = await getTrendingMovies();
    createCardsMovies(movies, trendingMovies);

    const categories = await getCategoriesMovies();
    console.log(categories);
    createCategoriesList(categories, categoriesList);

}




const navigation =()=>{
    if (location.hash === "#") {
        
    }else if(location.hash === "#") {
        
    }else if(location.hash === "#") {
        
    }else if(location.hash === "#") {
        
    }else if(location.hash === "#") {
        
    }else{
        homePage();
    }
}