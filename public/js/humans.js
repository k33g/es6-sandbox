//js/models/human.js
import Human from "./human.js";
import Collection from "./collection.js";

export default class Humans extends Collection {
  constructor (models = []) {
    super(models)
    this.url = 'api/humans/';
    this.model = Human;
  }
}