
export function Movie (movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.alttitle = movie.alttitle || '';
    this.description = movie.description;
    this.genre = movie.genre;
    this.year = movie.year;
    this.img = movie.img;
    this.imgs = movie.imgs;
    this.links = movie.links;
    this.rating = movie.rating || 0;
}

Movie.prototype.getInfo = function() {
    return this.title + ' ' + this.year + ' ' + this.description;
};
