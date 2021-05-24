# graphql-react

graphql with react [udemy tutorial](https://www.udemy.com/course/graphql-with-react-course/).
starter project code cloned from [Lyrical-GraphQL](https://github.com/stephengrider/lyrical-graphql).

### technologies

json-server

- quick setup server for development
- runs on sep localhost 3000
- later changed to mongoose as the real database

nodemon

- `npm run dev` script
- helps to refresh server on change

### udemy notes / bugfixing

**section 25: query fragments in GraphiQL.**

```
{
  apple:company(id:"1"){
    ...companyDetails
  },
  google:company(id:"2"){
    ...companyDetails
  }
}

fragment companyDetails on Company {
  id
  name
  description
}
```

**section 34: mongoDB setup**

ran into some deprication issues:
found solution here https://mongoosejs.com/docs/deprecations.html

passed the following options into mongoose.connect()

```
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
```

**section 34**

_error:_

> WARNING in configuration
> The 'mode' option has not been set, webpack will fallback to 'production' for this value.
> Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
> You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

_fix:_
[webpack configuration](https://webpack.js.org/configuration/mode/)
added `{ mode: "development" }` to `webpack.config.js`

_error:_

> Add @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.
> If you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.

_fix:_
`npm install @babel/preset-react @babel/plugin-syntax-jsx`
create `bable.config.json` and add to it:

```
{
  "presets": ["@babel/preset-react"],
  "plugins": ["@babel/plugin-transform-react-jsx"]
}
```

[git issues soln source](https://github.com/babel/babel/issues/12018#issuecomment-683260049)
[babel config](https://babeljs.io/docs/en/configuration)

_error:_
butt load of dependencies being outdated
_fix:_
[npm-check-updates](https://flaviocopes.com/update-npm-dependencies/) module

_error:_

> Uncaught Invariant Violation: In order to initialize Apollo Client, you must specify 'link' and 'cache' properties in the options object.
> These options are part of the upgrade requirements when migrating from Apollo Client 1.x to Apollo Client 2.x.

_fix:_
`npm install apollo-boost` and import ApolloClient from that module instead of from 'apollo-client' module.
