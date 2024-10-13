## form validation

```
  making a form with validation using react-hook-form

```

## packages

    - npm install firebase react-hook-form axios
    - npm install -D tailwindcss postcss autoprefixer daisyui@latest dotenv

#### setup tailwind[https://tailwindcss.com/docs/guides/vite]

    npx tailwindcss init -p

    tailwind.config.js
    ...
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ]

    index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

#### setup daisyui[https://daisyui.com/docs/install/]

    tailwind.config.js
      import daisyui from "daisyui"

      //...
      plugins: [
        daisyui,
      ],
