class AppComponent extends HTMLElement {
  constructor() {
    const shadow = this.attachShadow({ mode: "open" });
    this.mountPoint = document.createElement("div");
    shadow.appendChild(this.mountPoint);
  }
  connectedCallback() {}
  disconnectedCallback() {}
}

customElements.define("app-component", AppComponent);
