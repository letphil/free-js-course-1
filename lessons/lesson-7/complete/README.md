## creating a react web app

```
npm create vite@latest . -- --template react-ts


```

## packages

    - npm install -D tailwindcss postcss autoprefixer daisyui@latest
    - npm install react-hook-form react-firebase-hooks firebase axios react-router-dom

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
