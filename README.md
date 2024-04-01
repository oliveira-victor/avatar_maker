# Avatar Maker - create your character

This repository contains the source code for web application built with React JS + Vite, allowing users to create characters by selecting its features, with the option to save the image file to the device via html2canvas.

Deploy link: https://theavatarmaker.vercel.app/

https://github.com/oliveira-victor/avatar_maker/assets/116602113/d2a2841e-6cf5-4e1d-a795-006c6ea6126d

## Features

* Easy and user-friendly way to create different characters in a practical way with global states managed via Redux.
* Give your character a name by typing in the input field. That name displays under the character and will be set as the image file name when saved.
* Switch between light and dark themes, made possible with Styled-Components' Theme Provider.
* Make instant random character with one click/tap.
* Highly responsive behavior, adapting to desktop, tablet and smart phone, providing the best user's experience.
* Available in different languages, which can be switched without page reload, with i18next.

## Technologies used:
* React JS
* Vite
* TypeScript
* Redux
* Styled-Components
* i18next
* html2canvas

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/oliveira-victor/avatar_maker.git

2. Navigate to the project directory
   ```bash
   cd avatar_maker

3. Install dependencies
   ```bash
   npm install

4. Start the development server
   ```bash
   npm run dev

5. Open your browser: Navigate to http://localhost:5173.

## Developing

The image files must be placed in their specific folders, separated by layers of characters. They must have the same proportions and follow the same name pattern.
* The full image (that will be used as a layer of the character) should be named the same as the containing folder, plus a two-digit number (e.g., skin/skin01.png), following the numbers sequence.
* The thumbnails should be placed in the same folder as the layers, but named as thumb + the two-digit number sequence (e.g., skin/thumb01.png).
* The image layers are in vertical 4:3 proportion.

Redux layers slice will expect the images to be named as such, so it can handle the layers properly.

## Contributing

1. Fork the project
2. Create a new branch
3. Make your changes
4. Submit a pull request
