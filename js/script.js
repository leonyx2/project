"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// const answer1 = prompt("Один из последних просмотренных фильмов?", ""),
//       answer2 = prompt("На сколько оцените его?", ""),

//       answer3 = prompt("Один из последних просмотренных фильмов?", ""),
//       answer4 = prompt("На сколько оцените его?", "");

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

// personalMovieDB.movies[answer1] = answer2;
// personalMovieDB.movies[answer3] = answer4;

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало филььмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы клссичесыкий зритель");
} else {
    console.log("Вы киноман");
}

console.log(personalMovieDB);