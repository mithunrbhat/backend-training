import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <div class="content">
                <h1>Welcome to Home Page</h1>
                <p>lorem*2</p>
            </div>
            `;
    }
}