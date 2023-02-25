import { client } from "../index.js";

export async function getAllMovies() {
  return await client.db("b42wd").collection("movies").find({}).toArray();
}
export async function updateMovies(id, data) {
  return await client
    .db("b42wd")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
export async function deleteMovies(id) {
  return await client.db("b42wd").collection("movies").deleteOne({ id: id });
}
export async function getMovies(id) {
  return await client.db("b42wd").collection("movies").findOne({ id: id });
}
