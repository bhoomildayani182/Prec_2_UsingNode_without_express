const http = require("http");
const httpserver = http.createServer(function (req, res) {
    if (req.url == "/welcome") {
        res.end("You are most welcome!");
    } else if (req.url == "/22") {
        res.end("Hello there, greetings from 20it022");
    } else {
    res.end("You are not supposed to redirect here!");
}
});
httpserver.listen(8080, () => {
    console.log("Listning on port 8080");
});