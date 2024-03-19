import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
  base: `./`,
  server: {
    port: 3000, // controls which port to use.
    open: "/index.html", // which addres we should open into.
  },
  build: {
    rollupOptions: {
      input: {
        // list of all available pages in your application
        main: path.resolve(__dirname, "index.html"),
        // otherpage: path.resolve(__dirname, "src/other_page/otherpage.html"),
      },
    },
  },
})
