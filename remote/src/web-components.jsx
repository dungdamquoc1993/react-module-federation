import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Button from "./Button";

class AppComponent extends HTMLElement {
  shadowRoot;
  constructor() {
    super();
    this.mountPoint = document.createElement("div");
    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.mountPoint); // Sử dụng shadow DOM cannot render webgl
    // this.appendChild(this.mountPoint); // Không sử dụng shadow DOM render webgl ok
  }
  connectedCallback() {
    ReactDOM.createRoot(this.mountPoint).render(<Button/>);
  }
  disconnectedCallback() {}
}

customElements.define("app-component", AppComponent);
