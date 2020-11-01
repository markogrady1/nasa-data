copy the `config/example_config.js` file to a new file called `config/development.js` and fill in the default values

```
cp config/example_config.js config/development.js
```

Install dependencies

```
npm i
```
Startup application in development

```
API_KEY=<NASA_API_KEY> nodemon bin/server.js
```
or via npm

```
npm run dev
```

Startup application in production

```
API_KEY=<NASA_API_KEY> pm2 start bin/server.js
```

or via npm

```
API_KEY=<NASA_API_KEY> npm run start
```

API requests

### APOD - Astronomy Picture of the Day

curl request

```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"date":"2020-10-09"}'\
  http://localhost:3333/apod
```


### Mars Rovers

curl requests

all data for a given rover and sol

```
curl http://localhost:3333/rovers/data/:rover/:sol/:page
```

rover images for a given rover and sol

```
curl http://localhost:3333/rovers/photos/:rover/:sol/:page
```

Rovers include [curiosity, spirit, opportunity]
