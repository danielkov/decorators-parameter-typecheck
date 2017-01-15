module.exports = (...args) => {
  return (target, key, descriptor) => {
    let oldFunc = descriptor.value;
    descriptor.value = (...a) => {
      a.forEach((arg, i) => {
        console.log(`${typeof arg} : ${args[i]}`);
        if ((args[i] !== 'any' && args[i] !== 'optional' && typeof arg !== args[i] && args[i] !== 'array') || (args[i] === 'array' && Array.isArray(arg) === false) || (args[i] === 'object' && Array.isArray(arg))) {
          throw new TypeError(`Argument ${i} should be of type ${args[i]}. Specified type: ${Array.isArray(arg) ? 'array' : typeof arg}.`);
        }
      })
      oldFunc.call(this, ...a);
    }
    return descriptor;
  }
}
