import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("aboutUs");
    }

    async getHtml() {
        return `
        <div class="content">
            <h1>Welcome to about Us Page</h1>
            <p>lorem*5</p>
        </div>
            `;
    }
}