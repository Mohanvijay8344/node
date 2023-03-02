import { ObjectId } from "mongodb";
import { client } from "../index.js";

// export async function getAllMovies() {
//   return await client.db("b42wd").collection("movies").find({}).toArray();
// }
export async function updateMovies(id, data) {
  return await client
    .db("b42wd")
    .collection("movies")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
}
export async function deleteMovies(id) {
  return await client
    .db("b42wd")
    .collection("movies")
    .deleteOne({ _id: new ObjectId(id) });
}
export async function getMovies(id) {
  return await client
    .db("b42wd")
    .collection("movies")
    .findOne({ _id: new ObjectId(id) });
}

export async function getAllMovies(query) {
  return await client.db("b42wd").collection("movies").find(query).toArray();
}
