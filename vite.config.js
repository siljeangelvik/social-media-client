const path = require("path");

module.exports = {
  //base: ".", // for github pages
  root: path.resolve(__dirname, "./"), // what is root? https://vitejs.dev/config/#root
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    host: true,
  },
  build: {
    outDir: "./dist",
  },
};
