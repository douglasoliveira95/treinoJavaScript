
for (var i = 1; i < 7; i++){
    var h = document.createElement('h' + i);
    h.innerHTML = "Douglas " + i;
    document.body.appendChild(h);
    console.log('Count: ' + i);   
}