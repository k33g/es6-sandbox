export default class Collection {
  constructor (models = []) {
    this.models = models;
  }
  fetch (url) {
    return fetch(url)
      .then(res => res.json());
  }
  getAll () {
    return this.fetch(this.url).then(data => {

      data.forEach((fields) => {
        this.models.push(new this.model(fields))
      })

      /*
      return new Promise((resolve, reject) => {
        resolve(data)
      })
      */
    })
  }

}