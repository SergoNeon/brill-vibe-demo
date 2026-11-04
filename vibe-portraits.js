"use strict";
// Original, self-contained SVG profile illustrations. No borrowed user photos.
(function(){
const palettes={
p1:{bg:"#bc6287",skin:"#f0b78e",hair:"#35222e",shirt:"#e8ad8d",mode:1},
p2:{bg:"#5b79ab",skin:"#bd7959",hair:"#252129",shirt:"#91c3c2",mode:2},
p3:{bg:"#c97c64",skin:"#dc9972",hair:"#34252a",shirt:"#d6b5c7",mode:3},
p4:{bg:"#8274af",skin:"#e2b79d",hair:"#3e2c38",shirt:"#98a5ca",mode:2},
p5:{bg:"#b86974",skin:"#f0c5a7",hair:"#6a3b34",shirt:"#b5c9a7",mode:1},
p6:{bg:"#568d97",skin:"#be855f",hair:"#292427",shirt:"#e6ad9e",mode:2},
p7:{bg:"#c06c88",skin:"#965e42",hair:"#2c2028",shirt:"#f0be81",mode:3},
p8:{bg:"#696da5",skin:"#e0b394",hair:"#252027",shirt:"#a4a3df",mode:2}
};
function portrait(id){const p=palettes[id]||palettes.p1;
const long=p.mode===1,curly=p.mode===3;
const hairBack=long||curly?'<ellipse cx="64" cy="74" rx="38" ry="54" fill="'+p.hair+'"/>':'';
const hairTop=curly?'<path d="M33 56c-8-16 1-37 17-39 5-12 21-11 26-5 16-4 30 13 26 30 11 7 6 23-1 26-5-13-6-23-20-27-12 9-31 4-48 15z" fill="'+p.hair+'"/>':
long?'<path d="M30 67c-6-36 9-50 35-50 26 0 42 20 32 55l-11-26c-16 2-34 0-46 15z" fill="'+p.hair+'"/>':
'<path d="M31 58c-1-28 13-41 34-41 27 0 39 14 35 38-7-12-13-20-23-21-17 11-27 9-46 24z" fill="'+p.hair+'"/>';
const earrings=long?'<circle cx="36" cy="76" r="3" fill="#f8d799"/><circle cx="92" cy="76" r="3" fill="#f8d799"/>':'';
const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><radialGradient id="bg" cx="35%" cy="20%" r="90%"><stop stop-color="#ffffff" stop-opacity=".3"/><stop offset="1" stop-color="'+p.bg+'"/></radialGradient><linearGradient id="cloth" x1="0" y1="0" x2="1" y2="1"><stop stop-color="'+p.shirt+'"/><stop offset="1" stop-color="'+p.bg+'"/></linearGradient></defs><rect width="128" height="128" fill="url(#bg)"/><circle cx="109" cy="25" r="33" fill="#ffffff" fill-opacity=".12"/><circle cx="15" cy="101" r="37" fill="#2d2035" fill-opacity=".12"/><path d="M5 129c4-38 20-41 48-44h22c31 3 46 15 50 44z" fill="url(#cloth)"/><path d="M52 80h25v24c-10 8-19 8-25 0z" fill="'+p.skin+'"/>'+hairBack+'<ellipse cx="64" cy="64" rx="30" ry="37" fill="'+p.skin+'"/><ellipse cx="35" cy="70" rx="5" ry="10" fill="'+p.skin+'"/><ellipse cx="93" cy="70" rx="5" ry="10" fill="'+p.skin+'"/>'+hairTop+'<path d="M44 62q8-5 16 0m8 0q8-5 16 0" stroke="'+p.hair+'" stroke-width="3" stroke-linecap="round" fill="none"/><ellipse cx="52" cy="67" rx="2.7" ry="3.5" fill="#2e2527"/><ellipse cx="77" cy="67" rx="2.7" ry="3.5" fill="#2e2527"/><path d="M64 69l-2 12h5" stroke="#a76559" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M54 88q10 7 21-1" stroke="#9c555f" stroke-width="2.7" fill="none" stroke-linecap="round"/><ellipse cx="46" cy="80" rx="7" ry="3" fill="#c77981" fill-opacity=".22"/><ellipse cx="82" cy="80" rx="7" ry="3" fill="#c77981" fill-opacity=".22"/>'+earrings+'<path d="M40 120q24 12 48 0" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="2"/></svg>';
return 'url("data:image/svg+xml,'+encodeURIComponent(svg)+'")';
}
window.VIBE_PORTRAIT=portrait;
})();