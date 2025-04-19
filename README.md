# Ntk - Neutral Tool Kit

**Ntk (Neutral Tool Kit)** is a modern , cross-platform , telemetry free , independent and lightweight toolkit designed to simplify and streamline the process of web development. Built with flexibility and performance in mind, Ntk provides a collection of modular utilities and components that are easy to integrate and extend, empowering developers to build awesome web applications faster.

---

## 🚀 Features

- ⚙️ **Modular Design** – Use only what you need.
- 🌐 **Web-Friendly** – Designed specifically for modern front-end development.
- 🛠️ **Custom Build System** – Powered by `mklib` for flexible builds. (Only available for linux)
- 📦 **Lightweight & Performant** – Optimized for speed and minimal footprint.
- 💻 **Developer Friendly** – Well-commented source and MIT licensed.

---

## 📦 Installation

To use Ntk in your project, follow these steps:

(Linux)
```bash
git clone https://github.com/darkyboys/ntk.git
cd ntk
```

(Other Platforms)
Other Platforms may get ntk builded version from releases directly , Linux users can decide to either get pre-built version or build ntk manually.

---

## 🔧 Building Ntk (Linux Only - After Installation)

Ntk uses a custom build tool named `mklib` to compile and package the source files.

### Step-by-step:

1. Ensure `mklib` is available globally or in your project.
2. Run the build script:

```bash
mklib
```

This will generate a distributable version of the library in the `ntk/` directory as `ntk.js` full path `ntk/ntk.js` and you will need to include this with `<script src="ntk/ntk.js"></script>` in your html files.

---

## Done Setup ? 
Checkout the [Documentation](docs.md) then.

---

## 📁 Project Structure

```
ntk/
├── src/            # Source files
│   └── ...         # Ntk modules (components, utilities, etc.)
├── ntk/            # Compiled output (after build)
├── test/           # Test directory containing html files for testing.
├── build.mklib     # Configuration for mklib
├── docs.md         # Documentation
└── README.md       # You're reading it!
```

Each source file is documented and contains the following header:

```js
/*
 * Copyright (c) ghgltggamer 2025
 * Written by ghgltggamer
 * Ntk - Neutral Tool Kit (A ToolKit For Awesome Web Development)
 * Licensed under the MIT License
 * Checkout the README.md for more information
 * This is one of the source file for Ntk Library, Please build it using mklib as per shown in the README.md file.
*/
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).  
Feel free to use it in personal or commercial projects.

---

## ✨ Author

Made with ❤️ by [ghgltggamer](https://github.com/darkyboys) main account [click here](https://github.com/ghgltggamers)

---

## 🙌 Contributions

Contributions are welcome!  
Feel free to open issues or submit pull requests to improve Ntk.
