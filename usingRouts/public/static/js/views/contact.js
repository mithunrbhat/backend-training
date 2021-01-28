import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("contact");
    }

    async getHtml() {
        return `
        <div class="content">
            <h1>Welcome to Contact Page</h1>
            <p>lorem*10</p>
        </div>
            `;
    }
}