<!-- Replace these using search repo_name, project_title, short_description, project_description, view_demo_link -->
<!-- Prepend a hash # to filter active ones -->
<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />

<div align="center">
  <a href="https://www.flaticon.com/free-icon/gallery_9853877">
    <img src="github_assets/logo.png" alt="Logo" width="100" height="100">
  </a>

<h3 align="center">Image Gallery DND</h3>

  <p align="center">
    A beautiful Image Gallery with Drag and Drop feature
    <br />

[**Explore the docs »**](https://github.com/webdevsk/Image-Gallery-DND)

[View Demo](https://webdevsk.github.io/Image-Gallery-DND/)
· [Report Bug](https://github.com/webdevsk/Image-Gallery-DND/issues)
· [Request Feature](https://github.com/webdevsk/Image-Gallery-DND/issues)

  </p>
</div>

---

<!-- TABLE OF CONTENTS -->
<details>
<summary>Table of Contents</summary>
<br />

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features](#features)
  - [Featured Image](#featured-image)
  - [Hover Overlay](#hover-overlay)
  - [Drag And Drop](#drag-and-drop)
  - [Set Featured](#set-featured)
  - [Selection](#selection)
  - [Image Box/Expand Image](#image-boxexpand-image)
  - [Zoom, Pan and Pinch](#zoom-pan-and-pinch)
  - [Add Your Own Images](#add-your-own-images)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

</details>
<br/>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center">

[![Product snapshot](github_assets/snapshot.png)](https://webdevsk.github.io/Image-Gallery-DND/)

</div>
<br/>

A beautiful Image Gallery with Sorting and Drag and Drop Support.
For full feature list, head over to the [Features](#features) section below.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![React][React]][React-url]  
[![TailwindCSS][TailwindCSS]][Tailwind-url]  
[![HEADLESS UI](https://img.shields.io/badge/HEADLESS_UI-111827?style=for-the-badge&logo=headlessui&logoColor=%2366E3FF)](https://headlessui.com/)  
[![REACT ICONS](https://img.shields.io/badge/REACT_ICONS-f4f5f7?style=for-the-badge&logo=react&logoColor=%23e91e63)](https://react-icons.github.io/react-icons)  
[![DND KIT](https://img.shields.io/badge/DND_KIT-000000?style=for-the-badge&logo=dndkit&logoColor=%23FFFFFF)](https://dndkit.com/)  
[![REACT ZOOM PAN PINCH](https://img.shields.io/badge/REACT_ZOOM_PAN_PINCH-ffffff?style=for-the-badge&logo=reactzoompanpinch&logoColor=%23111111)](https://www.npmjs.com/package/react-zoom-pan-pinch)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

🌐 The project is already live at: [https://webdevsk.github.io/Image-Gallery-DND/](https://webdevsk.github.io/Image-Gallery-DND/)

OR

🖥️ You can test it on your local machine by following the steps below.

⭐ **Want to build a `Drag and Drop` only component from scratch? You can follow my own instructions here:**

**( )=> [Quick Setup DND Kit](docs/Quick%20Setup.md)**

### Prerequisites

1. **Install** [NODE.JS](https://nodejs.org/en/download) and [Git](https://git-scm.com/downloads)
1. Open your projects base folder and launch any **terminal** of your choice.
1. Run this command:

   ```sh
   npm install npm@latest -g
   ```

### Installation

<!-- 1. Get a free API Key at [https://example.com](https://example.com) -->

1. Clone the repo

   ```sh
   git clone https://github.com/webdevsk/Image-Gallery-DND.git
   ```

1. Install NPM packages

   ```sh
   npm install
   ```

1. Fill in a `.env.local` file following the patterns of `envSample.txt`

1. Run Dev server

   ```js
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Features

### Featured Image

- Built using CSS Grid layout. Fully responsive on all devices.
- First image spans by 2 cells in both direction indicating a Featured Image.

### Hover Overlay

![Hover Overlay preview](github_assets/image-1.png)

- Hover over an image to reveal an Overlay with action buttons.
- useState hook allows each button to show up indivisually based on different scenarios.

### Drag And Drop

![Drag and Drop preview](github_assets/image.png)

- Uses `dnd kit` library to allow drag and drop feature.
- Supports `Pointer`, `Mouse`, `Touch` and `Keyboard` interactions for better accessibility.
- Shows a `Duplicate element` that floats while dragging.
- Shows a `Drop zone` with proper styling.
- Animates on drop end.
- `Sorts` the state variable based on drop source and target.
- Animates on every `Sort` operations.

### Set Featured

- Overlay features a Set as Featured button.
- Sorts the state variable array to move current item to the beginning.
- Animates while being sorted.

### Selection

- Overlay features a Selection button.
- Select/Mark, Unselect/Unmark items for deletion.
- Gallery Header shows `Selected items count`, a `Batch Selection button` and `Delete button`.
- Items are removed from State variable array upon deletion.

### Image Box/Expand Image

- Overlay features a Expand button.
- Shows a `Dialogue` with the current image for a bigger view.
- Button for closing the Dialogue. Clicking outside closes the dialogue as well.
- Carefully setup Dialogue height and width for the Mobile support.

### Zoom, Pan and Pinch

- Uses `react-zoom-pan-pinch` library to allow expanded image to be interactive.
- Supports `Mouse`, `Mouse Wheel` and `Touch` to effectively zoom, pan and pinch image.

### Add Your Own Images

- Press `Add Images` button to add your own.
- File size validation:
  - Upto 2MB (2048KB)
- File format validation:
  - Only allow types of file: image

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
<!-- ## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/webdevsk/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
1. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
1. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
1. Push to the Branch (`git push origin feature/AmazingFeature`)
1. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

[![Follow on GitHub][GitHub]](https://github.com/webdevsk)
[![Follow on Linkedin][Linkedin]][Linkedin-url]

Project Link: [https://github.com/webdevsk/Image-Gallery-DND](https://github.com/webdevsk/Image-Gallery-DND)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br/>

<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Linkedin-url]: https://linkedin.com/in/webdevsk
[GitHub]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[Linkedin]: https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white
[contributors-shield]: https://img.shields.io/github/contributors/webdevsk/Image-Gallery-DND.svg?style=for-the-badge
[contributors-url]: https://github.com/webdevsk/Image-Gallery-DND/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/webdevsk/Image-Gallery-DND.svg?style=for-the-badge
[forks-url]: https://github.com/webdevsk/Image-Gallery-DND/network/members
[stars-shield]: https://img.shields.io/github/stars/webdevsk/Image-Gallery-DND.svg?style=for-the-badge
[stars-url]: https://github.com/webdevsk/Image-Gallery-DND/stargazers
[issues-shield]: https://img.shields.io/github/issues/webdevsk/Image-Gallery-DND.svg?style=for-the-badge
[issues-url]: https://github.com/webdevsk/Image-Gallery-DND/issues
[license-shield]: https://img.shields.io/github/license/webdevsk/Image-Gallery-DND.svg?style=for-the-badge
[license-url]: https://github.com/webdevsk/Image-Gallery-DND/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[Next-url]: https://nextjs.org/
[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Bootstrap]: https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://react-bootstrap.netlify.app/
[SASS]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
[SASS-url]: https://sass-lang.com/
[Chakra]: https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white
[Chakra-url]: https://chakra-ui.com/
[MUI]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white
[MUI-url]: https://mui.com/
[Styled Components]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[Styled-url]: https://www.styled-components.com/
[React-router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React-router-url]: https://reactrouter.com/
[Redux]: https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[Three-js]: https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white
[Three-js-url]: https://threejs.org/
[GSAP]: https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white
[GSAP-url]: https://greensock.com/gsap/
