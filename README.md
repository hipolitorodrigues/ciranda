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

Ciranda is a simple and interactive web application designed to facilitate access to web systems.

![alt text](https://github.com/hipolitorodrigues/ciranda/blob/5e354c1b1ad0bf8a30bb20acd324818beef8f86f/assets/images/sampling.png)

## Description

The Ciranda interface organizes representative icons into two groups arranged as concentric circles. Each icon provides a direct link to essential tools and systems, optimizing navigation, in addition to a top and bottom bar for the same purpose.

## Technologies Used

- **HTML5**: Application structuring.
- **CSS3**: Styling and responsive design.
- **JavaScript**: Logic for dynamic icon arrangement and interactivity.
- **Bootstrap**: For the grid in the secsecond.html page.

## Features

- **Circular Arrangement**: Icons distributed in inner and outer circles.
- **Responsive Design**: Layout adaptable to different screen sizes.
- **Direct Links**: Quick access to systems and tools through clickable icons.
- **Interactivity**: Visual effects when hovering over the icons.

## How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/hipolitorodrigues/ciranda.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ciranda
   ```

3. Open the `index.html` file in a browser of your choice.

## Project Structure

```plaintext
ciranda/
├── index.html                      # Main application file
├── assets/
│   ├── bootstrap/                  # Bootstrap resources
│   │   ├── bootstrap-icons/        # Bootstrap icons
│   │   ├── css/                    # Bootstrap style files
│   │   └── js/                     # Bootstrap scripts
│   ├── css/                        # Custom style files
│   ├── images/                     # Project images
│   ├── js/                         # Custom scripts
│   └── pages/                      # Additional project pages
```

## Prerequisites

Make sure you have an updated browser to ensure compatibility with the modern features used in the application.

## Customization

To add or modify icons and links:

1. Open the `script.js` file.
2. Find the JavaScript settings for `innerLinks` (inner circle) and `outerLinks` (outer circle).
3. Add or modify objects in the format:
   ```javascript
   { id: 'icon-name', url: 'https://link.com', image: 'path/to/image.png' }
   ```

## Developer

- **Developer**: Hipolito Rodrigues
- **Creation Date**: 11/11/2024
- **Last Update**: 01/16/2025
- **Current Version**: 1.2

---

## License

This project is licensed under the MIT License. This means you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, as long as you keep the original copyright notice and license included in all copies or substantial portions of the software.
