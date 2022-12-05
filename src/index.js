import express from "express";
import env from "dotenv";
import siswa_routes from "./routes/siswa_routes";
env.config();

const app = express();
const PORT = process.env.PORT;

// middleware
app.use(express.json());

// route
app.use(siswa_routes);

app.listen(PORT, () => {
  console.log("server is running.....");
});
