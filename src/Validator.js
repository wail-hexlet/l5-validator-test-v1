import NumberSchema from './NumberSchema.js';
export default class Validator {
  number() {
    const validator = (value) => typeof value === 'number';
    return new NumberSchema([validator]);
  }

}