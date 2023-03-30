import express from "express";
import bcrypt from "bcrypt";
import { createUsers, getUserByName } from "../service/users.service.js";
import jwt from "jsonwebtoken";

const router = express.Router();

async function generateHashedPassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = bcrypt.genSaltSync(NO_OF_ROUNDS);
  const hashedPassword = bcrypt.hash(password, salt);
  return hashedPassword;
}

//express.json => middleware
router.post("/signup", async function (request, response) {
  const { username, password } = request.body;

  const userFromDb = await getUserByName(username);
  console.log(userFromDb)

  if (userFromDb) {
    return response.status(400).send({ message: "User already exists" });
  } else if (!userFromDb) {
    return response
      .status(400)
      .send({ message: "password must be at least 8 characters" });
  } else {
    const hashedPassword = await generateHashedPassword(password);
    const result = await createUsers({
      username: username,
      password: hashedPassword,
    });
    response.send(result);
  }
});

router.post("/login", async function (request, response) {
  const { username, password } = request.body;

  const userFromDb = await getUserByName(username);
  console.log(userFromDb);

  if (!userFromDb) {
    return response.status(400).send({ message: "Invalid credentials" });
  } else {
    const storedDbPassword = userFromDb.password;
    const isPasswordCheck = await bcrypt.compare(password, storedDbPassword);
    // console.log(isPasswordCheck);

    if (isPasswordCheck) {
      const token = jwt.sign({id: userFromDb._id}, process.env.SECRET_KEY)
      return response.send({ message: "login successful", token : token});
  } else {
    return response.status(400).send({ message: "Invalid" });
  }
  }
});

export default router;
