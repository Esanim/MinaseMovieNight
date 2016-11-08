
export function Movie (movie) {
    this.title = movie.title;
    this.alttitle = movie.alttitle || '';
    this.description = movie.description;
    this.genre = movie.genre;
    this.year = movie.year;
    this.img = movie.img;
    this.links = movie.links;
    this.rating = movie.rating;
}

Movie.prototype.getInfo = function() {
    return this.title + ' ' + this.year + ' .';
};
