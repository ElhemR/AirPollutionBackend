# Air Pollution Backend

Node.js Rest Api to consume data stored in Mongodb. 

## Getting Started


### Prerequisites

Restore the database. The dump folder is included in the repo: airqualitydb

```
mongorestore -d airqualitydb --path-to-dumpfolder 
```

### Running the server

Run node.js server

```
node server.js
```

Once the server is running: 

```
Server is listening on port 3000
```

Examples of routes 
```
localhost:3000/cities 
localhost:3000/countries 
```

