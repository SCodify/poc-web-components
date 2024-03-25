export default class NavbarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .navbar {
                    display: flex;
                    height: 27px;
                    justify-content: end;
                    align-items: center;
                    background-color: #333;
                    padding: 15px 30px;

                }
                
                .menu {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    z-index: 1;
                }
                
                .menu li {
                    display: inline;
                }
                
                .menu li a {
                    display: block;
                    color: white;
                    text-decoration: none;
                    padding: 20px;
                }
                
                .hamburger-menu {
                    display: none;
                    flex-direction: column;
                    cursor: pointer;
                }

                .active {
                    font-weight: bold;
                    color: yellow !important    ;
                }
                
                .hamburger-menu {
                    display: none;
                    flex-direction: column;
                    cursor: pointer;
                }
                    
                .bar {
                    width: 25px;
                    height: 3px;
                    background-color: white;
                    margin: 3px 0;
                }

                @media screen and (max-width: 768px) {
                    .menu {
                        flex-direction: column;
                        background-color: #333;
                        position: absolute;
                        top: 60px;
                        left: 0;
                        width: 100%;
                        overflow: hidden;
                        height: 0px;
                        transition: all 0.2s ease-out;
                    }

                    .menu li a {
                        text-align: end;
                    }
                  
                    .menu.show {
                        height: 174px;
                    }
                  
                    .hamburger-menu {
                        display: flex;
                    }
                }
            </style>
            <nav class="navbar">
                <ul class="menu">
                    <li><a href="/index.html">Inicio</a></li>
                    <li><a href="/catalog.html">Catálogo</a></li>
                    <li><a href="/contact.html">Contacto</a></li>
                </ul>
                <div class="hamburger-menu">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
            </nav>
      `;

        const currentPath = window.location.pathname;

        const links = this.shadowRoot.querySelectorAll('.menu li a');
        
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });

        const hamburgerMenu = this.shadowRoot.querySelector('.hamburger-menu');
        
        const menu = this.shadowRoot.querySelector('.menu');

        hamburgerMenu.addEventListener('click', () => {
            menu.classList.toggle('show');
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                menu.classList.remove('show');
            }
        });
    }
}