import posts from "./tuits.js";
let tuits = posts;

const currentUser = {
  userName: "Obi-Wan Kenobi",
  handle: "ben_kenobi",
  avatar: "../images/kenobi.jpg",
};

const templateTuit = {
  ...currentUser,
  topic: "Star Wars",
  title: "The Force Awakens",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
  disliked: false,
  dislikes: 0,
};

const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit._id = new Date().getTime() + "";
  newTuit.likes = 0;
  newTuit.liked = false;
  tuits.unshift({ ...newTuit, ...templateTuit });
  res.json(newTuit);
};
const findTuits = (req, res) => res.json(tuits);

const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate);
  tuits[tuitIndex] = { ...tuits[tuitIndex], ...updates };
  res.sendStatus(200);
};
const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
  res.sendStatus(200);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
