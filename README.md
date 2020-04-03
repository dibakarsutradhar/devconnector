# DevConnector

> Social network for developers

This is a MERN stack application. It is a small social network app that includes authentication, profiles and forum posts.

# Quick Start

### Add a .env file in the root folder with the following

```
MONGO_URL=<your_mongoDB_Atlas_uri_with_credentials>
MONGO_PASS=<your_mongo_secret_key>
```

### Add another .env file in the client root folder with the following

```
GH_CLIENT_ID=<your_github_oAuth_application_client_id>
GH_CLIENT_SECRET=<your_github_applicaiton_client_secret>
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

### Test production before deploy

```bash
NODE_ENV=production node server.js
```

Check in browser on [http://localhost:5000/](http://localhost:5000/)

### Live Preview

Check in browser on [http://devconnector-dibakar.herokuapp.com/]
Check in browser on [https://devconnector.now.sh/]

## App Info

### Author

Dibakar Sutra Dhar
[Dibakar Sutra Dhar](https://www.dibakar.me)

### Version

1.0.0

### License

This project is licensed under the MIT License
