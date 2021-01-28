var navContent = Array.from(document.getElementsByClassName('navbar-content'));

function getContent(element) {
    let content = {
        home: `<h1>Welcome to my web page.</h1>`,
        contact: `<h1>Mithun Bhat - mbhat@kodekraft.ko.en</h1>`,
        aboutUs: `<h1>Hi, my name is Mithun Bhat and this is made using PushState or something like that.</h1>`
    };
    document.querySelector('#body').innerHTML = content[element];
}

function pushUrl(navId) {
    window.history.pushState({navId}, `selected${navId}`, `http://127.0.0.1:5500/singlePageApplication/usingPushPopState/index.html/${navId}`);
    getContent(navId);
}

navContent.forEach(item => {
    var navId = item.id;
    item.addEventListener('click', () => pushUrl(navId));
    
    window.addEventListener('popstate', e => {
        if (e.state !== null) {
            console.log(e.state.navId);
            getContent(e.state.navId);
        }
    });
});

