import express, { query } from "express";
import { auth } from "../middleware/auth.js"

import { client } from "../index.js";
import {
  getMovies,
  deleteMovies,
  updateMovies,
  getAllMovies,
} from "../service/movies.service.js";

const router = express.Router();

router.get("/:id", async function (request, response) {
  const { id } = request.params;
  const movie = await getMovies(id);
  console.log(movie);
  movie
    ? response.send(movie)
    : response.status(404).send({ message: "Movie Not Found" });
});

router.delete("/:id", async function (request, response) {
  const { id } = request.params;
  const result = await deleteMovies(id);
  result.deletedCount >= 1
    ? response.send({ message: "Movie Deleed Successfully" })
    : response.status(404).send({ message: "Movie Not Found" });
});

router.put("/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  const result = await updateMovies(id, data);
  response.send(result);
});

router.get("/", async function (request, response) {
  if(request.query.rating) {
    request.query.rating = +request.query.rating;
  }

  const movies = await getAllMovies(request.query);

  response.send(movies);
  console.log(request.query)
});

//express.json => middleware
router.post("/", async function (request, response) {
  const data = request.body;
  const result = await client.db("b42wd").collection("movies").insertMany(data);
  response.send(result);
});

export default router;
