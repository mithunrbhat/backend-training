var navContent = Array.from(document.getElementsByClassName('navbar-content'));

function ajaxCall(navId = 'home') {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.querySelector('#body').innerHTML = this.responseText;
        }
    };
    switch(navId) {
        case 'home': xhttp.open('GET', './content/home.html', true);
                     break;
        case 'contact': xhttp.open('GET', './content/contact.html', true);
                        break;
        case 'aboutUs': xhttp.open('GET', './content/aboutUs.html', true);
                        break;
    };
    xhttp.send();
}

ajaxCall();
navContent.forEach(item => {
    item.addEventListener('click', () => ajaxCall(item.id));
});

