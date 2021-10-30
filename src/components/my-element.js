class navigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.firstUrl = this.getAttribute("firstUrl");
    this.icon = this.getAttribute("icon");
    this.textIcon = this.getAttribute("text-icon");
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Icons"
        rel="stylesheet"
      />
      <nav>
        <ul>
          <li>
            <a class="ml" href=${this.firstUrl}>
              <span class="material-icons icon">
                ${this.icon}
              </span>
              <span class="pl">${this.textIcon}</span>
            </a>
          </li>
        </ul>
      </nav>

        ${this.getStyles()}
      `;
    return template;
  }

  getStyles() {
    return `
      <style>
        :host {
          --color-icon: tomato;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: fit-content;
        }

        nav{
          padding-top: 1.5rem;
          margin-left: 1.5rem
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        a {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          text-decoration: none;
          color: var(--color-icon);
        }

        .pl{
          padding-left: 0.5rem
        }

        .icon {
          color: var(--color-icon);
          font-size: 1.8rem
        }

      </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("navigation-component", navigation);
