<a name="readme-top"></a>

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/webdevtut/Blogfeed">
    <img src="client/public/logo.png" alt="Logo" width="200" height="50">
  </a>

  <h3 align="center">Blogfeed</h3>

  <p align="center">
    Create Personal and Private Blogs
    <br />
    <a href="https://github.com/webdevtut/Blogfeed/blob/master/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://blogfeed.onrender.com/">View Demo</a>
    ·
    <a href="https://github.com/webdevtut/Blogfeed/issues">Report Bug</a>
    ·
    <a href="https://github.com/webdevtut/Blogfeed/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Blogfeed Screen Shot][product-screenshot]](https://blogfeed.onrender.com/)

Blog creation Web application created for self-learning and showcase purpose.

Features :

- Google OAuth 2.0 authentication and responsive for multiple screens :smile:

- Scalable image upload functionality (Cloudinary)

- Redis Cache Implementation 

- Blog Like Functionality


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Following Frameworks are used to make this project

- [![Node][Node.io]][Node-url]
- [![EXPRESSJS][EXPRESSJS.io]][EXPRESSJS-url]
- [![MONGOOSE][MONGOOSE.io]][MONGOOSE-url]
- [![Mongodb][Mongodb.io]][Mongodb-url]
- [![Redis][Redis.io]][Redis-url]
- [![REACT][REACT.io]][REACT-url]
- [![REDUX][REDUX.io]][REDUX-url]
- [![JEST][JEST.io]][JEST-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

Install Node v14+ 

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/webdevtut/Blogfeed.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. In Client folder run the command
   ```sh
   npm install --legacy-peer-deps
   ```
4. Connect Redis URL and MongoDB URL

5. Get Google OAuth Keys _&rarr; [here](https://developers.google.com/identity/protocols/oauth2)_

6. Get Cloudinary Keys _&rarr; [here](https://cloudinary.com/developers)_

7. In base folder run the command
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Create an account on deployed website to see the example🤗.

_For more examples, please refer to the [Documentation](https://blogfeed.onrender.com/)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Deployment on Render
- [x] Google OAuth Integration And Responsive styling upgrade
- [x] Implement Jest (Testing Framework) Global setup along with modular tests.
- [x] Implement State management using Redux
- [x] Add Redis Caching Layer Integration
- [ ] Add Features for User Accessibility
  - [ ] Camera access on device for taking and uploading straight from device
  - [ ] Share Blog on other social media platform feature 

See the [open issues](https://github.com/webdevtut/Blogfeed/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@tushar-web-dev](https://linkedin.com/in/tushar-web-dev/) - tusharlookingforjob@gmail.com

Project Link: [https://blogfeed.onrender.com/](https://blogfeed.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Useful links

- [Alternative to Heroku for deployment](https://render.com/)
- [MongoDB Cheat Sheet](https://www.mongodb.com/developer/products/mongodb/cheat-sheet/)
- [React Starter](https://create-react-app.dev/)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[issues-shield]: https://img.shields.io/github/issues/webdevtut/Blogfeed.svg?style=for-the-badge
[issues-url]: https://github.com/webdevtut/Blogfeed/issues
[license-shield]: https://img.shields.io/github/license/webdevtut/blogfeed.svg?style=for-the-badge
[license-url]: https://github.com/webdevtut/Blogfeed/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/tushar-web-dev/
[product-screenshot]: screenshots/product_screenshot.jpg
[Redis.io]: https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white
[Redis-url]: https://redis.io/
[EXPRESSJS.io]: https://img.shields.io/badge/ExpressJS-000000?style=for-the-badge&logo=express&logoColor=white
[EXPRESSJS-url]: https://expressjs.com/
[MONGOOSE.io]: https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white
[MONGOOSE-url]: https://mongoosejs.com/
[Mongodb.io]: https://img.shields.io/badge/MONGODB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[Mongodb-url]: https://www.mongodb.com/
[Node.io]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
[REACT.io]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white
[REACT-url]: https://react.dev/
[REDUX.io]: https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white
[REDUX-url]: https://redux.js.org/
[JEST.io]: https://img.shields.io/badge/JEST-C21325?style=for-the-badge&logo=jest&logoColor=white
[JEST-url]: https://jestjs.io/

