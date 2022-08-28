// Dependencies
const PORT = process.env.PORT || 3000;
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const allNotes = require('./db/db.json');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// HTML ROUTES
// GET Route for homepage
// Shows all notes
app.get('/api/notes', (req, res) => {
    res.json(allNotes.slice(1));
})

app.get("/", (req, res) =>
res.sendFile(path.join(__dirname, "/public/index.html"))
);
// GET Route for notes
app.get("/notes", (req, res) =>
res.sendFile(path.join(__dirname, "/public/notes.html"))
); 