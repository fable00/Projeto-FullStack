# What is JSON Server?
JSON Server is a package that help us to improve our development in case of no back-end avaliabe to use, it will run a 'database' setted on mock folder.

# How to run JSON Server

## For the first install
If is your first time installing JSON Server you can run:
### Locally
```
npm i -D json-server
```

### Globally

```
npm i -g json-server
```

## In this project

Since you installed the dependencies, the command ``` npm run server ``` should be able to run the scripted command wrote set to it, if this doesn't work you can set it by yourself defining it on your package.json file in scripts field:

```
"server": "json-server -w -p 3333 ./mock/database.json"
```

Now you can just run again:

```
npm run server
```


