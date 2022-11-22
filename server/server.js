const app = require("express")();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
