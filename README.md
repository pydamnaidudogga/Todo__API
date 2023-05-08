
# Todo__API

Using  NodeJS, ExpressJS, sequelize and MySQL database

1. Create todo
path:/todo method: post
 
2. Update todo
path:/todo method: put
 
3. Get all todos
path:/todo method: get
 
4. Get todo by Id
path:/todo/:todoId method: get
 
5. Get todo by Id
path:/todo/:todoId method:delete




## Installation


```bash
  npm install
  npm start
```
    
## API Routes

#### Create Todo

```http
  POST /todo
```

| Parameter | Type     | 
| :-------- | :------- | 
|   `eventName`|  `String` |
| `discription` | `String` |
| `date`       | `String`   |



#### Update Todo

```http
  PUT /todo
```

| Parameter | Type     | 
| :-------- | :------- | 
| `todoID`      | `Integer` |
| `eventName` | `String`|
`etc`


#### Get All Todos
```http
GET /todo
```

#### Get The todo by todoId
```http
  GET /todo/:todoId
```

| Parameter | Type     | 
| :-------- | :------- | 
| `id`      | `string` |

#### Delete Todo

```http
  DELETE /todo/:todoId
```
| Parameter | Type     | 
| :-------- | :------- | 
| `id`      | `string` |




