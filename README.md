# graphql-react

graphql with react [udemy tutorial](https://www.udemy.com/course/graphql-with-react-course/)

### technologies

json-server

- quick setup server for development
- runs on sep localhost 3000

nodemon

- `npm run dev` script
- helps to refresh server on change

### udemy notes

section 25: query fragments in GraphiQL.

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
