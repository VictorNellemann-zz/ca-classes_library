
// Library reoranization and 

class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    addRating(ratings) {
        this._ratings.push(ratings);
    }

    // set title(title) {}
    // set isCheckedOut(isCheckedOut) {}
    // set ratings(ratings) {}
    // getAverageRating(ratings) {}
}

class Book extends Media { // Properties: author, pages
    constructor (title, author, pages) {
        super(title);
        this.author = author;
        this.pages = pages;
    }

    get author() {
        return this.author;
    }
    get pages() {
        return this.pages;
    }
}

const film = new Media('Heat');

film.toggleCheckOutStatus();
film.addRating(1);
film.addRating(5);
film.addRating(4);
console.log(film);

film.toggleCheckOutStatus();
console.log(film);

const grenadiers = new Book('Grenadiers', 'Kurt Meyer', 386);

grenadiers.addRating(5);
console.log(grenadiers);


// class Movie extends Media { // Properties: director, runTime
//     constructor (director, runTime) {
//         super(title);
//         this.director = director;
//         this.runTime = runTime;
//     }

//     get director() {
//         return this.director;
//     }
//     get runTime() {
//         return this.runTime;
//     }
// }

// class Cd extends Media { // Properties: artist, songs
//     constructor (artist, songs) {
//         this.artist = artist;
//         this.songs = songs;
//     }
//     get artist() {
//         return this.artist;
//     }
//     get songs() {
//         return this.songs;
//     }
// }