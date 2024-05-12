"use strict";
function make_album(artist_name, album_title, track_no) {
    const music_album = {
        artist_name: artist_name,
        album_title: album_title,
        track_no: track_no
    };
    return music_album;
}
let A = make_album(`Atif Aslam`, `Jal Pari`);
let B = make_album(`Ali zafar`, `Jhoom`);
let C = make_album(`NoorJehan`, `Dil ka diya`);
let D = make_album(`Abida Parveen`, `Raqs-e-Bismil`, 9);
console.log(A);
console.log(B);
console.log(C);
console.log(D);
