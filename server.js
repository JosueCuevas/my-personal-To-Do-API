if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./.env" });
}
require("./connection/mongo");
const app = require("./app");
app.listen(app.get("port"), () => {
  console.log(`Servidor Iniciado en el Puerto ${app.get("port")}`);
});
