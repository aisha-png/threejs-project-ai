# An AI-Powered 3D Website Using React - Three JS Project

![Screenshot 2023-10-21 at 22 31 04](https://github.com/aisha-png/threejs-project/assets/67974517/74bcc13f-6f7a-4364-ae32-938d7bcb2bb1)

This is a Three.js React project for generating AI images using OpenAI's DALL.E model. The application allows users to customize and generate images by providing prompts.

## Project Structure

The project is organized into two main folders:

- **client:** Contains the React front-end application.
- **server:** Houses the Express.js back-end server.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installing

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aisha-png/threejs-project.git
   ```
2. **Navigate to the project directory:**
    ```bash
    cd threejs-project
    ```
3. **Client Installation**
 - Change into the client directory:
    ```bash
   cd client
    ```
 - Install dependencies:
   ```bash
   npm install
    ```
4. **Server Installation**
 - Change into the server directory:
  ```bash
cd server
```
 - Install dependencies:
```bash
npm install
```
5. **Running the Application**
- Start the server:
```bash
npm start
```
- Start the client:
- ```bash
  cd ../client
  npm run dev
  ```
6. **Client Dependencies**
  - [Three.js](https://threejs.org/) - A JavaScript 3D library.
  - [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) - A React renderer for Three.js.
  - [@react-three/drei](https://github.com/pmndrs/drei) - Useful helpers for react-three-fiber.
  - [maath](https://www.npmjs.com/package/maath) - A math library.
  - [valtio](https://www.npmjs.com/package/valtio) - Proxy-state libraries for React.
  - [react-colour](https://www.npmjs.com/package/react-colour) - Color Pickers from Sketch, Photoshop, Chrome & more.
  - [framer-motion](https://www.framer.com/motion/) - A React library to animate UI components.
  - [tailwindcss](https://tailwindcss.com/) - A utility-first CSS framework.
  - [postcss](https://www.npmjs.com/package/postcss) - A tool for transforming CSS with JavaScript plugins.
  - [autoprefixer](https://www.npmjs.com/package/autoprefixer) - A plugin to parse CSS and add vendor prefixes.

7. **Server Dependencies**

  - [Cloudinary](https://cloudinary.com/) - Media management in the cloud.
  - [cors](https://www.npmjs.com/package/cors) - CORS middleware for Express.js.
  - [dotenv](https://www.npmjs.com/package/dotenv) - Load environment variables.
  - [Express](https://expressjs.com/) - Web application framework for Node.js.
  - [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js.
  - [Nodemon](https://nodemon.io/) - Monitor for changes and automatically restart the server.


8. **Acknowledgments**

I would like to thank Adrian Hajdin from JS Mastery for his excellent tutorial for this project. With his tutorial, I have a much better understanding of using AI generatated images with front and the use of 3D graphics.
