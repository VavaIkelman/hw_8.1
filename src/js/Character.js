export default class Character {
  constructor(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть не менее 2 и не более 10 символов');
    } else {
      this.name = name;
    }

    this.type = '';
    this.health = 100;
    this.level = 1;
  }
}
