//node
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const path = __dirname + "/public/";
const port = 8000;

app.use(cors());
app.use(express.static(path));
app.us;
app.use(bodyParser.json());

const moviesList = [
  {
    movieName: "Ravan",
    rating: 4,
    relesedDate: "12/12/2022",
  },
  {
    movieName: "Yashodha",
    rating: 4,
    relesedDate: "10/12/2022",
  },
  {
    movieName: "Drishyam2",
    rating: 3.5,
    relesedDate: "1/12/2022",
  },
  {
    movieName: "Dangal",
    rating: 5,
    relesedDate: "13/12/2022",
  },
  {
    movieName: "PK",
    rating: 4.5,
    relesedDate: "10/11/2020",
  },
  {
    movieName: "Sultan",
    rating: 4,
    relesedDate: "15/10/2021",
  },
  {
    movieName: "Kabir Singh",
    rating: 3,
    relesedDate: "12/12/2023",
  },
  {
    movieName: "KGF 2",
    rating: 5,
    relesedDate: "10/10/2021",
  },
  {
    movieName: "Ravan",
    rating: 4,
    relesedDate: "12/12/2022",
  },
  {
    movieName: "Yashodha",
    rating: 4,
    relesedDate: "10/12/2022",
  },
  {
    movieName: "Drishyam2",
    rating: 3.5,
    relesedDate: "1/12/2022",
  },
  {
    movieName: "Dangal",
    rating: 5,
    relesedDate: "13/12/2022",
  },
  {
    movieName: "PK",
    rating: 4.5,
    relesedDate: "10/11/2020",
  },
  {
    movieName: "Sultan 2",
    rating: 4,
    relesedDate: "15/10/2021",
  },
  {
    movieName: "Kabir Singh",
    rating: 3,
    relesedDate: "12/12/2023",
  },
  {
    movieName: "KGF 1",
    rating: 4.5,
    relesedDate: "10/10/2021",
  },
];

app.get("/getMovies", (req, res) => {
  console.log("moviesList", moviesList);
  res.send(moviesList);
});

app.post("/", (req, res) => {
  res.send("post req");
});

app.listen(port, () => {
  console.log("port", port);
});
