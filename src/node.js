const getId =(id)=>{
    return document.getElementById(id);
};


const headerSection = getId('header-section');
const trendingSection = getId("trending-section");
const categoriesSection = getId("categories-section");

// header section
const headerTitle = getId("header-section-text-title");
const headerForm = getId("header-section-form-search");



// trending section 
const trendingMovies = getId("trending-section-container-movies");
const trendingButtonMore = getId("trending-section-button-more");


// categories section
const categoriesList = getId("categories-section-list-categories");