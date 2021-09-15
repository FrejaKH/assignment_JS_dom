

function addToCenter () {

    let center = document.getElementById("center");
    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode("Test");
    
    h2.appendChild(h2Text);
    h2.setAttribute('style', 'color: yellow');
    

    if (center.firstChild) {
        
        center.removeChild(center.firstChild);
        
    } else {

        center.appendChild(h2);
    }
    
}

center.addEventListener('click', addToCenter);



function addToRight () {

    let right = document.getElementById("right");
    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode("Test");

    h3.appendChild(h3Text);

    if (right.firstChild) {

        right.removeChild(right.firstChild);

    } else {

        right.appendChild(h3);
    }
}

right.addEventListener('click', addToRight);

