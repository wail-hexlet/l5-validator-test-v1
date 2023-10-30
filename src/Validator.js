import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';

export default class Validator {
  number() {
    const validator = (value) => typeof value === 'number';
    return new NumberSchema([validator]);
  }

  array() {
    const validator = (value) => Array.isArray(value);
    return new ArraySchema([validator]);
  }

}