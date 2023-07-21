import app from "./app.js"

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

app.listen(PORT, HOST, () => {
  console.log("API ONLINE na porta:", PORT);
});