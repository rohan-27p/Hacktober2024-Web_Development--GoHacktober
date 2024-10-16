 
# 🎃 Hacktoberfest 2024 - ACM JEC 🎃

Welcome to the Hacktoberfest 2024 repository by ACM JEC! 🙌 Hacktoberfest is a month-long celebration of open-source software run by DigitalOcean, GitHub, and other partners. It is open to everyone, and all skill levels are welcome to participate. The goal is to encourage contributions to open-source projects and foster collaboration in the tech community. 

## 🌱 How to Get Started

To participate in Hacktoberfest with ACM JEC, follow these steps:

1. **Register on [Hacktoberfest's official website](https://hacktoberfest.digitalocean.com/)**.
2. **Fork and clone this repository** to start contributing.
3. **Browse through the open issues**, pick one, and submit a pull request.
4. **Contribute and have fun while learning**! 🎉

---

## 🚀 Getting Started with Development

This project is developed using **Vite + React**. Follow the steps below to clone the repository, set up the development environment, and start working on your contributions.

### 1. Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v16+ recommended)
- **Git**

### 2. Cloning the Repository

Follow these steps to clone the repository and set it up locally:

```bash
# Clone the repository
git clone https://github.com/acmjec/Hacktober2024-Web_Development--GoHacktober-.git

# Navigate into the project directory

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will be running at `http://localhost:5173`. You can now view the web application in your browser.

---

## 🎨 Design Implementation Guide

The design for this project is provided in Figma. To implement it:

1. **Access the Design:**
   - Get the Figma design file from the [Figmalink](https://www.figma.com/design/QogmRqrj6iyCGj15lB0xfb/Untitled?node-id=0-1&t=rj2vv8uLHGUdUJMZ-1)  
2. **Analyze the Design:**
   - Break down the design into reusable components such as `Header`, `Footer`, `Button`, `Card`, etc.
   - Identify global styles and themes (like colors, fonts, and spacings) that can be applied throughout the project.
3. **Component Creation:**
   - Create individual components for each reusable part of the design (refer to the folder structure below).
   - Use Tailwind CSS for styling, and ensure the design is responsive.

### Best Practices for Implementing the Design

- **Use Reusable Components:** Make components like `Button`, `Card`, and `Modal` generic to be used throughout the project.
- **Maintain Consistency:** Stick to consistent naming conventions and folder structures.
- **Responsive Design:** Make sure to use responsive units (like `rem`, `em`, `%`, or `vw`) and media queries.
- **Component Styling:** Use CSS Modules, styled-components, or a utility-first CSS framework like Tailwind CSS for styling.

---

## 📂 Recommended Folder Structure

Following a structured and organized folder layout is crucial for scaling the project and keeping it maintainable. Below is a recommended folder structure for a Vite + React project.

```plaintext
/
├── public/                     # Public assets (favicons, images)
├── src/                        # Main source code
│   ├── assets/                 # Images, icons, fonts, etc.
│   ├── components/             # Reusable components
│   │   ├── Button/             # Button component
│   │   │   ├── Button.jsx
│   │   │   └── index.js
│   │   ├── Navbar/             # Navbar component
│   │   └── ...                 # Other components
│   ├── pages/                  # Page components
│   │   ├── Home/               # Home page
│   │   ├── Dashboard/          # Dashboard page
│   │   └── ...                 # Other pages
│   ├── services/               # API calls and service functions
│   ├── store/                  # State management (e.g., Redux, Zustand)
│   ├── styles/                 # Global and shared styles
│   ├── utils/                  # Utility functions and helpers
│   ├── App.jsx                 # Main App component
│   ├── main.jsx                # Vite's entry point
│   └── index.css               # Global styles
├── .gitignore                  # Files to ignore in the repository
├── package.json                # Project dependencies and scripts
└── vite.config.js              # Vite configuration file
```

### Explanation

- **`assets/`**: Holds all static files like images, icons, and fonts.
- **`components/`**: Contains reusable UI components with each component having its own folder for related files (JSX, styles).
- **`pages/`**: Contains the main pages of the application.
- **`services/`**: Handles API requests and other service-related functions.
- **`store/`**: Manages the application's state using a state management library.
- **`styles/`**: Houses global styles or shared CSS files.
- **`utils/`**: Contains utility functions or helper functions.
- **`App.jsx`**: The main component that serves as the root of the application.
- **`vite.config.js`**: Configures Vite for custom settings.

### Best Practices for Components

1. **Functional Components**: Use functional components with hooks (`useState`, `useEffect`, etc.) for building UIs.
2. **Component Isolation**: Each component should have its folder containing the component logic (`.jsx`), styles (`.module.css`), and a potential test file.
3. **Atomic Design Principles**: Break down components into atoms (smallest parts like buttons), molecules (combination of atoms), organisms (sections), templates, and pages.

---

## 👩‍💻 Contribution Guidelines

1. **Fork this repository.**
2. **Commit your changes** with meaningful commit messages.
3. **Push your changes** to the branch.
4. **Create a Pull Request (PR)** and mention the issue number if applicable.


---

## 🎉 Happy Coding ! 🎉
 
