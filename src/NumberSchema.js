export default class NumberSchema {
  constructor(validators) {
    this.validators = [...validators];
  }
  
  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  odd() {
    const validator = (value) => {
      if(value % 2 !== 0) {
        return true;
      }
      return false;
    } 
    return new NumberSchema([...this.validators, validator]);
  }
    
  even() {
    const validator = (value) => {
      if(value % 2 === 0) {
        return true;
      }
      return false;
    } 
    return new NumberSchema([...this.validators, validator]);
  }
}