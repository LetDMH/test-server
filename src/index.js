import express from "express";

const app = express();

app.get("/test", (req, res) => {
    res.send("Hello Word!")
});

app.listen(12306, () => {
    // console.log(`serve is being on ${ip.address()}:${PORT}`);
    console.log(`serve is being on port 12306`);
})