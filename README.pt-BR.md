<div align="center">
   <img height="30" width="40" src="https://github.com/hipolitorodrigues/assets-for-github/blob/985021e61af3982fd9f28be446b106b958f24696/images/01/img-readme-ico.svg">
   <a href="./README.md">
      <img height="30" width="120" src="https://github.com/hipolitorodrigues/assets-for-github/blob/985021e61af3982fd9f28be446b106b958f24696/images/01/img-readme-en.svg">
   </a>
   <a href="./README.pt-BR.md">
      <img height="30" width="60" src="https://github.com/hipolitorodrigues/assets-for-github/blob/985021e61af3982fd9f28be446b106b958f24696/images/01/img-readme-pt-br.svg">
   </a>
</div>

# Ciranda

Ciranda é uma aplicação web simples e interativa, desenvolvida para facilitar o acesso a sistemas web.

![alt text](https://github.com/hipolitorodrigues/ciranda/blob/c16b93e44bd824909f040dfa42e7f9f37762b116/assets/images/sampling.png)


## Descrição

A interface do Ciranda organiza ícones representativos em dois grupos dispostos como círculos concêntricos. Cada ícone fornece um link direto para ferramentas e sistemas essenciais, otimizando a navegação, além uma uma barra suberior e outra inferior para o mesmo propósito.

## Tecnologias Utilizadas

- **HTML5**: Estruturação da aplicação.
- **CSS3**: Estilização e design responsivo.
- **JavaScript**: Lógica de disposição dinâmica dos ícones e interatividade.
- **Bootstrap**: Para o grid da página secsecond.html.

## Funcionalidades

- **Disposição Circular**: Ícones distribuídos em círculos interno e externo.
- **Design Responsivo**: Layout adaptável para diferentes tamanhos de tela.
- **Links Diretos**: Acesso rápido a sistemas e ferramentas por meio de ícones clicáveis.
- **Interatividade**: Efeitos visuais ao passar o mouse sobre os ícones.

## Como Utilizar

1. Clone este repositório:
   ```bash
   git clone https://github.com/hipolitorodrigues/ciranda.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd ciranda
   ```

3. Abra o arquivo `index.html` em um navegador de sua preferência.

## Estrutura do Projeto

```plaintext
ciranda/
├── index.html                      # Arquivo principal da aplicação
├── assets/
│   ├── bootstrap/                  # Recursos do Bootstrap
│   │   ├── bootstrap-icons/        # Ícones do Bootstrap
│   │   ├── css/                    # Arquivos de estilos do Bootstrap
│   │   └── js/                     # Scripts do Bootstrap
│   ├── css/                        # Arquivos de estilos personalizados
│   ├── images/                     # Imagens do projeto
│   ├── js/                         # Scripts personalizados
│   └── pages/                      # Páginas adicionais do projeto
```

## Pré-requisitos

Certifique-se de que você tem um navegador atualizado para garantir compatibilidade com os recursos modernos usados na aplicação.

## Personalização

Para adicionar ou modificar os ícones e links:

1. Abra o arquivo `script.js`.
2. Encontre as configurações em JavaScript para `innerLinks` (círculo interno) e `outerLinks` (círculo externo).
3. Adicione ou altere os objetos no formato:
   ```javascript
   { id: 'nome-do-icone', url: 'https://link.com', image: 'caminho/para/imagem.png' }
   ```

## Developer

- **Developer**: Hipolito Rodrigues
- **Creation Date**: 2024-11-11
- **Last Update**: 2025-05-19
- **Current Version**: 1.3

---

## License

This project is licensed under the MIT License. This means you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, as long as you keep the original copyright notice and license included in all copies or substantial portions of the software.
