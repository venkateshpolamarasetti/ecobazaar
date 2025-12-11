import fs from "fs";
import path from "path";

// Helper to create folders
function createFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log("📁 Created:", folderPath);
    }
}

// Helper to create files
function createFile(filePath, content = "") {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, content);
        console.log("📄 Created:", filePath);
    }
}

const folders = [
    "src/assets/logos",
    "src/assets/products",
    "src/assets/banners",

    "src/components/UI",
    "src/components/Layout",
    "src/components/Common",

    "src/pages/Home",
    "src/pages/Product",
    "src/pages/Category",
    "src/pages/Cart",
    "src/pages/Checkout",
    "src/pages/Orders",
    "src/pages/Wishlist",
    "src/pages/Auth",
    "src/pages/Profile",

    "src/features/cart",
    "src/features/products",
    "src/features/user",
    "src/features/wishlist",

    "src/context",
    "src/services",
    "src/hooks",
    "src/utils",
    "src/constants",
    "src/router",
    "src/styles",
    "src/store",
    "src/middleware",
    "src/types",
];

// Create folders
folders.forEach((folder) => createFolder(folder));

const files = {
    "src/App.jsx": "export default function App() { return <div>App</div> }",
    "src/main.jsx": "import App from './App';",
    "src/index.css": "",

    "src/router/AppRouter.jsx": "export const AppRouter = () => {};",

    "src/styles/globals.css": "",
    "src/styles/variables.css": "",
    "src/styles/reset.css": "",

    "src/services/api.js": "import axios from 'axios';",
    "src/services/productService.js": "",
    "src/services/userService.js": "",
    "src/services/cartService.js": "",
    "src/services/authService.js": "",

    "src/utils/currency.js": "",
    "src/utils/storage.js": "",
    "src/utils/formatters.js": "",
    "src/utils/validators.js": "",

    "src/constants/routes.js": "",
    "src/constants/apiRoutes.js": "",
    "src/constants/config.js": "",

    "src/store/store.js":
        "import { configureStore } from '@reduxjs/toolkit';",
};

// Create files
Object.entries(files).forEach(([file, content]) => {
    createFile(file, content);
});

console.log("\n🎉 Project structure generated successfully!");
