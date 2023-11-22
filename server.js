/** @format */

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use("/", require("./routes/countries"));

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
