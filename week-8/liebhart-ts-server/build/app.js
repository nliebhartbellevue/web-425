"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Title: app.ts
 * Author: Nathaniel Liebhart
 * Date: February 24, 2020
 * Description: Server-Side Communication with Node.js and Express
 */
const express = require("express");
const app = express();
const composers = [
    { id: 1, firstName: "Johann", lastName: "Bach" },
    { id: 2, firstName: "Wolfgang", lastName: "Mozart" },
    { id: 3, firstName: "Ludwig", lastName: "Beethoven" },
    { id: 4, firstName: "Giuseppe", lastName: "Verdi" },
    { id: 5, firstName: "Frederic", lastName: "Chopin" }
];
// function to get all composers
function getComposers() {
    return composers;
}
// root route
app.get('/', (req, res) => {
    res.send('The URL for composers is http://localhost:3000/api/composers');
});
// Get all composers route
app.get('/api/composers', (req, res) => {
    res.json(getComposers());
});
// function to get composer by id
function getComposerById(composerId) {
    return composers.find(c => c.id == composerId);
}
// Get composer by ID route
app.get('/api/composer/:id', (req, res) => {
    res.json(getComposerById(parseInt(req.params.id)));
});
// Configure Express server
const server = app.listen(3000, "localhost", () => {
    console.log("Express is listening on port 3000");
});
//# sourceMappingURL=app.js.map