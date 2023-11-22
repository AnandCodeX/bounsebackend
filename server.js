/** @format */

//Important Imports
const express = require("express");
const cors = require("cors");
const app = express();

//Cors for Cross Platform 
app.use(cors());

//Routes & Middleware as of We Dont Have Any Middleware
app.use("/", require("./routes/countries"));

//Server Running Port Decleration 
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
