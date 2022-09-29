class User {}

User.prototype.age = 9;
User.prototype.name = 'Alissa';
User.prototype.congratulate = function (message) {
  return 'Congratulations ' + this.name + '! ' + message;
};
const user = new User();
const Base = Object.create(User.prototype);
Base.name = 'Basil';
Base.congratulate = User.prototype.congratulate;
export const userProxy = new Proxy(Base, {
  get: (object, property, receiver) => {
    if (property == 'congratulate') {
      return () => object[property].apply(object, ['hehehe']);
    }
    return Reflect.get(object, property);
  },
  set: (obj, property, value) => {
    if (property == 'age') {
      if (value > 190) {
        return console.error('You cannot be that old!');
      }
    }
    return true;
  },
});

console.log(userProxy.congratulate('Happy birthday!'));
