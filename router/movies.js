import express from "express";

import { client } from "../index.js";

const router = express.Router();


router.get("/:id", async function (request, response) {
  const { id } = request.params;
  const movie = await client
    .db("b42wd")
    .collection("movies")
    .findOne({ id: id });
  console.log(movie);
  movie
    ? response.send(movie)
    : response.status(404).send({ message: "Movie Not Found" });
});

router.delete("/:id", async function (request, response) {
  const { id } = request.params;
  const result = await client
    .db("b42wd")
    .collection("movies")
    .deleteOne({ id: id });
  result.deletedCount >= 1
    ? response.send({ message: "Movie Deleed Successfully" })
    : response.status(404).send({ message: "Movie Not Found" });
});

router.put("/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  const result = await client
    .db("b42wd")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
  response.send(result);
});

router.get("/", async function (request, response) {
  const movies = await client
    .db("b42wd")
    .collection("movies")
    .find({})
    .toArray();
  response.send(movies);
  console.log(movies)
});

//express.json => middleware
router.post("/", async function (request, response) {
  const data = request.body;
  const result = await client.db("b42wd").collection("movies").insertMany(data);
  response.send(result);
});

export default router;
