import Human from "./human.js";
import Humans from "./humans.js";

let humans = new Humans();

humans.getAll().then(() => {
  console.log(humans.models)
});
