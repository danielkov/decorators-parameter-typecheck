# Read Me!

Decorators are not even in the cut for ES7, which means if you want to use this extremely convenient little library, you'll have to compile it with [Babel](http://babeljs.io/), using the following plugin: [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy).

# How to use

As I was looking for an easier way to add type checking to my dependencies of other modules, I realised that most of the time I was simply writing the same things over and over. As awesome programmers, we should keep our code DRY and so this is what I came up with. Hope you'll like it and feel free to contribute to it.

Basic example:

```js
import * as typecheck from 'decorators-typecheck'
// same as const typecheck = require('decorators-typecheck'); You'll need to transpile it with Babel even for Node JS anyway.

class MyClass {
  constructor(...args) {
    this.data = args
  }

  @typecheck('string')
  sayHello (name) {
    console.log(`Hello, ${name}!`)
  }

  @typecheck('object', 'array') // notice that this module knows the difference between an array and other objects.
  compare (obj, arr) {
    for (item of obj) {
      if (arr.includes(obj[item])) {
        console.log(`We've got a match: ${obj[item]}!`)
      }
    }
  }

  @typecheck('any', 'any', 'optional') // if we want to make it so that typecheck skips some arguments, we can give it the 'any' or 'optional' argument. They do the same thing, but your collegue may thank you for using both.
  lastFunction (any, sortOf, arg) {
    
  }
}

let myClass = new myClass()

myClass.sayHello('Daniel') // > Hello, Daniel!

myClass.sayHello({name: 'Daniel'}) // > Uncaught TypeError: Argument 0 should be of type string. Specified type: object.

// The following will not run after error. So let's assume this is another scenario...

myClass.compare({ one: 'something', two: 'otherthing' }, ['something', 'somethingElse']) // > We've got a match: something!

myClass.compare(['something', 'somethingElse'], { one: 'something', two: 'otherthing' }) // > Uncaught TypeError: Argument 0 should be of type object. Specified type: array.
```

# Learn More about Decorators

To learn more about decorators follow [this link.](https://github.com/wycats/javascript-decorators)
