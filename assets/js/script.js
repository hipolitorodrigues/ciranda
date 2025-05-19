/* Classe responsável por criar e gerenciar o círculo de links */
class CircularLinks {
    constructor() {
        // Obtém referência ao container do círculo
        this.container = document.getElementById('circleContainer');
        
        // Define os links do círculo interno
        this.innerLinks = [
            { id: 'ddg012', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-porto_norte-v4.png' },
            { id: 'ddg013', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-oriente-v4.png' },
            { id: 'ddg014', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-oeiras-v4.png' },
            { id: 'ddg015', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-evora-v4.png' },
            { id: 'ddg016', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-porto_centro-v4.png' },

            { id: 'ddg017', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-porto_norte-v2.png' },
            { id: 'ddg018', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-porto_centro-v2.png' },
            { id: 'ddg019', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-evora-v2.png' },
            { id: 'ddg020', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-oeiras-v2.png' },
            { id: 'ddg021', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-oriente-v2.png' }
        ];

        this.outerLinks = [
            { id: 'ddg01', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-axporto_norte-v2.png' },
            { id: 'ddg02', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-axoriente-v2.png' },
            { id: 'ddg03', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-axoeiras-v2.png' },
            { id: 'ddg04', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-expedia-v2.png' },
            { id: 'ddg05', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-mirai-v2.png' },
            { id: 'ddg06', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-dedge-v2.png' },

            { id: 'clean', image: 'assets/images/clean.png' },
            { id: 'clean', image: 'assets/images/clean.png' },
            { id: 'clean', image: 'assets/images/clean.png' },

            { id: 'ddg07', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-planet-v2.png' },
            { id: 'ddg08', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-hrs-v2.png' },
            { id: 'ddg09', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-booking-v2.png' },
            { id: 'ddg10', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-axporto_centro-v2.png' },
            { id: 'ddg11', url: 'https://duckduckgo.com/&search', image: 'assets/images/img-axevora-v2.png' }
        ];
        
        // Inicializa o círculo
        this.init();
        
        // Adiciona listener para redimensionamento da janela
        window.addEventListener('resize', () => this.updateLayout());
    }

    // Cria um elemento de link individual
    createLinkElement(link, index, isOuter) {
        // Cria elemento <a>
        const linkElement = document.createElement('a');
        linkElement.className = 'link-item';
        linkElement.dataset.id = link.id;
        linkElement.dataset.isOuter = isOuter;
        linkElement.dataset.index = index;
    
        // Se o link não tiver URL, marque-o como desativado
        if (!link.url) {
            linkElement.classList.add('disabled');
            linkElement.style.cursor = 'default'; // Força o cursor padrão
        } else {
            linkElement.href = link.url;
            linkElement.target = '_blank';
        }
    
        // Cria elemento <img>
        const img = document.createElement('img');
        img.src = link.image;
        img.alt = link.id;
        linkElement.appendChild(img);
    
        return linkElement;
    }

    // Inicializa o círculo
    init() {
        this.createLinks();
        this.updateLayout();
    }

    // Cria todos os links no círculo
    createLinks() {
        // Adiciona links externos
        this.outerLinks.forEach((link, index) => {
            this.container.appendChild(this.createLinkElement(link, index, true));
        });

        // Adiciona links internos
        this.innerLinks.forEach((link, index) => {
            this.container.appendChild(this.createLinkElement(link, index, false));
        });
    }

    // Atualiza o layout do círculo
    updateLayout() {
        const margin = 2;
        const hoverSpace = 40;
        
        // Calcula o tamanho do container
        const containerRect = this.container.getBoundingClientRect();
        const containerSize = Math.min(
            containerRect.width - (margin * 0 + hoverSpace * 0),
            containerRect.height - (margin * 0 + hoverSpace * 0)
        );
        // ou - Calcula o tamanho do container
        /* const containerSize = Math.min(
            window.innerWidth - (margin * 2 + hoverSpace * 2),
            window.innerHeight - (margin * 2 + hoverSpace * 2)
        ); */
        
        // Define os raios dos círculos
        const outerRadius = (containerSize / 2) * 0.9;
        const innerRadius = outerRadius * 0.6;

        // Ajusta dimensões do container
        this.container.style.width = `${containerSize}px`;
        this.container.style.height = `${containerSize}px`;

        // Calcula tamanho dos itens
        const outerItemSize = Math.min(
            (2 * Math.PI * outerRadius) / this.outerLinks.length * 0.5,
            70
        );
        const innerItemSize = Math.min(
            (2 * Math.PI * innerRadius) / this.innerLinks.length * 0.5,
            70
        );

        // Posiciona cada item no círculo
        const links = this.container.getElementsByClassName('link-item');
        Array.from(links).forEach(link => {
            const isOuter = link.dataset.isOuter === 'true';
            const index = parseInt(link.dataset.index);
            const total = isOuter ? this.outerLinks.length : this.innerLinks.length;
            const radius = isOuter ? outerRadius : innerRadius;
            const itemSize = isOuter ? outerItemSize : innerItemSize;

            // Calcula posição usando trigonometria
            const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
            const left = radius * Math.cos(angle) + containerSize / 2 - itemSize / 2;
            const top = radius * Math.sin(angle) + containerSize / 2 - itemSize / 2;

            // Aplica posição calculada
            link.style.left = `${left}px`;
            link.style.top = `${top}px`;
            link.style.width = `${itemSize}px`;
            link.style.height = `${itemSize}px`;
        });
    }
}

// Inicializa a classe quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new CircularLinks();
});