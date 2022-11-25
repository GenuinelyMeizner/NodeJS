const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send({ message: "Server is running - Data sent successfull" })
});

app.get("/animal", (req, res) => {
    res.send({ animal: "giraffe" })
});

app.get("/animal/:id", (req, res) => {
    if (Number(req.params.id) === 1) {
        res.send({name: "Henry", age: 12})
    } else {
        res.send({ error: "Don't know that animal" })
    }
});

app.get("/lookincloset", (req, res) => {
    if (req.query.babadook) {
        return res.send({ babadook: "Run for your life!" })
    }
    res.redirect("/gobacktobed")
});

app.get("/gobacktobed", (req, res) => {
    res.send({ message: "Sleep tight" })
});

app.listen(8080, () => {
    console.log('Server is running on port', 8080);
});