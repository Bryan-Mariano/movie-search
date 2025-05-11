


const createCardsMovies =(data, container)=>{
    if (Array.isArray(data)) {
        data.forEach((a)=>{
            const figure = document.createElement("figure");
            figure.classList.add("container-movies__figure-movie");
            
            const img = document.createElement("img");
            img.classList.add("figure-movie__img-movie");

            img.src = "https://image.tmdb.org/t/p/w300" + a.poster_path;

            figure.appendChild(img);
            container.appendChild(figure);

        })
    }
}




const createCategoriesList =(data, container)=>{
    if (Array.isArray(data)) {
        data.forEach((a)=>{
            const li = document.createElement("li");
            const liText = document.createTextNode(a.name);

            li.setAttribute("id", `genre-${a.id}`);

            li.classList.add("list-categories__text-item");
            li.classList.add("text--tertiary-bold");
            li.appendChild(liText);
            container.appendChild(li);

        })
    }
}