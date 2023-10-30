export default class ArraySchema {
  constructor(validators) {
    this.validators = [...validators];
  }
  
  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  length(length) {
    const validator = (value) => {
      if(value === undefined) {
        return false;
      } else {
        return value.length === length
      };
    } 
    return new ArraySchema([...this.validators, validator]);
  }
}