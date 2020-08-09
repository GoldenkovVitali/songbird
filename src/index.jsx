import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main';

ReactDOM.render(<Main />, document.getElementById('root'));

// async function getMovieSlides() {
//   const url = 'https://www.xeno-canto.org/api/2/no-cors/recordings?query=Grus grus';
// const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ed08d7eee2582ec3d2fdadb788cddf57&tag_mode=all&extras=url_m&format=json&nojsoncallback&tags=Grus grus';
//   const res = await fetch(url);
//   console.log(res);
// }

// getMovieSlides();
