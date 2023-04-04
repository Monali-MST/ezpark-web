var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");
const dotenv = require("dotenv");
var app = express();

const operations_stat_route = require("./routes/operations_stat_route");// import routing file

dotenv.config();
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", operations_stat_route);//routing for the static and financial view

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.listen(process.env.PORT, () => {
  console.log("server started in port : ", process.env.PORT);
});
