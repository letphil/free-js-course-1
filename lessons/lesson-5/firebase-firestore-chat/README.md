## firebase-firestore-chat-complete

```

```

# step 1

    npm install dotenv tailwindcss postcss autoprefixer daisyui@latest -D
    npm install firebase

# step 2

#### setup tailwind[https://tailwindcss.com/docs/guides/vite]

    npx tailwindcss init -p

    tailwind.config.ts ->
    /** @type {import('tailwindcss').Config} */
    export default {
      ________ this part here
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      _________ end here
      theme: {
        extend: {},
      },
      plugins: [],
    }

#### setup daisyui[https://daisyui.com/docs/install/]

    tailwind.config.js ->

    module.exports = {
      //...
      plugins: [
        require('daisyui'),
      ],
    }
