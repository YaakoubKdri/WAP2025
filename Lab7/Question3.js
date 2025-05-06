'use strict';

class Exercise3 {
  #movies = new Map();

  add_genre(genre) {
    if (!this.#movies.has(genre)) {
      this.#movies.set(genre, []);
      return true;
    }
    return false; 
  }

  add_movie_in_genre(genre, new_movie) {
    if (!this.#movies.has(genre)) return false;

    const movies = this.#movies.get(genre);
    const exists = movies.some(movie => movie.id === new_movie.id);
    if (exists) return false;

    movies.push(new_movie);
    return true;
  }

  update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
    if (!this.#movies.has(genre)) return false;

    const movies = this.#movies.get(genre);
    const movie = movies.find(m => m.id === movie_id);
    if (!movie) return false;

    movie.title = new_title;
    return true;
  }

  delete_movie_by_genre_and_movie_id(genre, movie_id) {
    if (!this.#movies.has(genre)) return false;

    const movies = this.#movies.get(genre);
    const index = movies.findIndex(m => m.id === movie_id);
    if (index === -1) return false;

    movies.splice(index, 1);
    return true;
  }

  get_movie_title_by_id(genre, movie_id) {
    if (!this.#movies.has(genre)) return '';

    const movie = this.#movies.get(genre).find(m => m.id === movie_id);
    return movie ? movie.title : '';
  }
}

// test

const exercice3 = new Exercise3();

// Add genres
console.log(exercice3.add_genre('thriller')); // true
console.log(exercice3.add_genre('comedy'));   // true
console.log(exercice3.add_genre('thriller')); // false

// Add movies
console.log(exercice3.add_movie_in_genre('thriller', { id: '1', title: 'The American' })); // true
console.log(exercice3.add_movie_in_genre('thriller', { id: '2', title: 'Arcadian' }));     // true
console.log(exercice3.add_movie_in_genre('thriller', { id: '1', title: 'Id already exists' })); // false

// Update movie
console.log(exercice3.update_movie_title_by_genre_and_movie_id('thriller', '2', 'Arcadian2.0')); // true
console.log(exercice3.update_movie_title_by_genre_and_movie_id('thriller', '3', 'Not Exists'));        // false

// Delete movie
console.log(exercice3.delete_movie_by_genre_and_movie_id('thriller', '1')); // true
console.log(exercice3.delete_movie_by_genre_and_movie_id('thriller', '99')); // false

// Get movie title
console.log(exercice3.get_movie_title_by_id('thriller', '2')); // "Arcadian2.0"
console.log(exercice3.get_movie_title_by_id('thriller', '1')); // "" (deleted)
console.log(exercice3.get_movie_title_by_id('comedy', '1'));   // "" (no movies)