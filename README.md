# Cheers Mate!

![demo](docs/images/demo.png 'Demo')

Live example hosted on heroku can be found at [cheersm8.tk](https://cheersm8.tk)

Talking to your friends couldn't be simpler!

It is built using the React, Express, simple-peer, and BulmaCSS.

## Features

Essentially, here're some of its features:

- 4 Person private meeting rooms
- Silent Disconnects
- Clean mono-repo structure with Express Server and React Client
- Copy and Paste meeting rooms
- WebSockets used for peering
- Pretty UI using Bulma and Styled Components
- Easy deployability on Heroku

## Setting Up

#### Recommended Tools Checklist

- Git Clone this repository
- Create a [Heroku account](https://www.heroku.com/)
- Install [Node.JS](https://nodejs.org/en/download/)
- Install [Yarn Package Manager](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

#### Installing Requirements

```bash
$ git clone https://github.com/mhwilkes/Cheers-Mate.git
$ cd Cheers-Mate
$ yarn setup
```

##### Configuring Enviromental Variable

Create a ".env" in "src/client", it should look like the following:

```
REACT_APP_API_URL="http://localhost:5000"
```

#### Running Project

```bash
$ # run both server and client
$ yarn dev
$ # run server only
$ yarn server
$ # run client only
$ yarn client
```

#### To Deploy

Deploying this project on Heroku is dead simple. Basically, go on Heroku and create a new Heroku app, connect your project Github to your new Heroku app, and hit Deploy. Note, that you will need to configure the environmental variable under settings.
