export default class NavbarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                    nav {
                        background-color: #333;
                        color: #fff;
                        padding: 16px;
                        position: sticky;
                        top: 0;
                        z-index: 1;
                    }

                    ul {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                    }

                    li {
                        display: inline-block;
                        margin-right: 20px;
                    }

                    a {
                        color: #fff;
                        text-decoration: none;
                    }

                    .active {
                        font-weight: bold;
                        color: yellow;
                    }
            </style>
            <nav>
                <ul>
                    <li><a href="/index.html">Inicio</a></li>
                    <li><a href="/catalog.html">Catálogo</a></li>
                    <li><a href="/contact.html">Contacto</a></li>
                </ul>
            </nav>
      `;

        const currentPath = window.location.pathname;

        const links = this.shadowRoot.querySelectorAll('a');
        
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }
}