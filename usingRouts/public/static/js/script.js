import Home from "./views/home.js";
import Contact from "./views/contact.js";
import AboutUs from "./views/aboutUs.js";

const navigateTo = url => {
    window.history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/index.html/home", view: Home },
        { path: "/index.html/contact", view: Contact },
        { path: "/index.html/aboutus", view: AboutUs }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#content-body").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener('DOMContentLoaded', () =>{
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});