function getContent(hashName) {
    let content = {
        home: `<h1>Welcome to my web page</h1>`,
        contact: `<h1>Mithun Bhat - mbhat@kodekraft.ko.en</h1>`,
        aboutUs: `<h1>Hi, my name is Mithun Bhat and this is made using Hash not Ash</h1>`
    };
    document.querySelector('#page-body').innerHTML = content[hashName];
}

function displayContent() {
    if(!location.hash) {
        location.hash = '#home';
    }
    var hashName = location.hash.substr(1);
    getContent(hashName);
}

displayContent();
window.addEventListener('hashchange', displayContent);