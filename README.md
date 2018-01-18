# Server Side Validation with Joi

a small example of server side validation middleware in nodejs with express using [Joi](https://www.npmjs.com/package/joi) - a validator for JavaScript objects -

- this workshop is meant to be a code-along so if you just want to see a working example go directly to step-3.
- handlebars is used for rendering.

### step-1
Just basic express file structure with an example of a signup form that has html input validations and a controller that only logs the request body.

### step-2
Add server side validation in controller without any module - you don't need to look through this step it's only to show you how much work and frustration is needed to write simple validators by your own-

### step-3
Use Joi in validator middleware and define a schema to validate by it.

#### useful links
- [how to use middlewares in express router](https://expressjs.com/en/4x/api.html#router.METHOD)
- [Joi docs](https://github.com/hapijs/joi/blob/v13.1.0/API.md)
