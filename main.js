
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

    getAverageRating(ratings) {
        let values = this._ratings;
        let sum = values.reduce((previous, current) => current += previous);
        let avg = sum / values.length;
        this._ratings = Math.floor(avg);
        return this._ratings;
    }
}

class Movie extends Media { // Properties: director, runTime
    constructor (title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

const heat = new Movie('Heat','Michael Mann', 170);
heat.addRating(1);
heat.addRating(3);
heat.addRating(1)
heat.addRating(4)
heat.getAverageRating();
heat.toggleCheckOutStatus();
console.dir(heat);

class Book extends Media { // Properties: author, pages
    constructor (title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

const grenadiers = new Book('Grenadiers', 'Kurt Meyer', 386);
grenadiers.addRating(2);
grenadiers.addRating(4);
grenadiers.getAverageRating();
grenadiers.toggleCheckOutStatus();
console.dir(grenadiers);

const mariesErindringer = new Book('Maries Samlede Erindringer', 'Marie Buhl Simonsen', 296);
mariesErindringer.toggleCheckOutStatus();
mariesErindringer.addRating(5);
console.dir(mariesErindringer);

