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

### udemy notes

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
