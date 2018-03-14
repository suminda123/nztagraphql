const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express()
const fetch = require('node-fetch')
const DataLoader = require('dataloader')
const util = require('util')
const parseXML = util.promisify(require('xml2js').parseString)

app.listen(3000, () => console.log('Listening ...'));
