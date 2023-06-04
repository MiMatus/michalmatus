# ![Alt text](./public/favicon-16x16.png) Michal Matúš

🧙 My personal website built with dark magic of React & Next.js and served by awesome caddy http server

## 🛠 Installation & Set Up

### 🐋 Docker:

```bash
# Build dev image
docker build -t devpage-dev -f Dockerfile --target=builder .
# Run development server
docker run -it -v $PWD:/app --rm --name devpage -p 3000:3000 --entrypoint npm devpage-dev run dev
```

#### Helpers (makefile)

To save some keyboard hits you can use prepared helpers commands in makefile  
To see all possibilities:

```bash
make help
```

```
build-dev                      builds dev image
build-next                     builds next.js app
build                          builds image with site statically served with caddy
install                        installs dependencies
run-dev                        run development server on port 3000
typecheck                      run npm typecheck
```

### NPM

```bash
# Install dependencies
npm install
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result and you are good to go with your magic 😄

## 🚨 License / Attribution

Feel free to use or gets inspired by anything in this repository but remember **plagiarism is bad** so please respect MIT license and do not forget to give me proper credit. If nothing else I will be really happy to see my code helping someone else.

## 🎨 Color theme

| Color      | Hex                                                                |
| ---------- | ------------------------------------------------------------------ |
| Main       | ![#6e07f3](https://via.placeholder.com/10/6e07f3?text=+) `#6e07f3` |
| Background | ![#f2f0ee](https://via.placeholder.com/10/f2f0ee?text=+) `#f2f0ee` |
| Texts      | ![#141c3a](https://via.placeholder.com/10/141c3a?text=+) `#141c3a` |
| Buttons    | ![#58595b](https://via.placeholder.com/10/58595b?text=+) `#58595b` |
