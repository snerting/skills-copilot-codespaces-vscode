//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Importing the comments.json file
const comments = require('./comments.json');

//Create a route for comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

//Create a route for comments by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found.');
    res.send(comment);
});

//Create a route for comments by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found.');
    res.send(comment);
});

//Create a route for comments by postId
app.get('/comments/postId/:postId', (req, res) => {
    const comment = comments.find(c => c.postId === parseInt(req.params.postId));
    if (!comment) res.status(404).send('The comment with the given postId was not found.');
    res.send(comment);
});

//Create a route for comments by name
app.get('/comments/name/:name', (req, res) => {
    const comment = comments.find(c => c.name === req.params.name);
    if (!comment) res.status(404).send('The comment with the given name was not found.');
    res.send(comment);
});

//Create a route for comments by email
app.get('/comments/email/:email', (req, res) => {
    const comment = comments.find(c => c.email === req.params.email);
    if (!comment) res.status(404).send('The comment with the given email was not found.');
    res.send(comment);
});

//Create a route for comments by body
app.get('/comments/body/:body', (req, res) => {
    const comment = comments.find(c => c.body === req.params.body);
    if (!comment) res.status(404).send('The comment with the given body was not found.');
    res.send(comment);
});

//Create a route for comments by postId
app.get('/comments/postId/:postId', (req, res) => {
    const comment = comments.find(c