/** @format */

const express = require("express");
const router = express.Router();
const axios = require("axios");

//Get API Takes Country Name Fetch The Data From Given API Return The Response Data
router.get("/country/:name", async (req, res) => {
	console.log("API Hit");
	const country = req.params.name;
	console.log(country);

	try {
		const response = await axios.get(
			`https://restcountries.com/v3.1/name/${country}`
		)
		
		const countryInfo = response.data[0];
		res.json({
			name: countryInfo.name.common,
			capital: countryInfo.capital[0],
			population: countryInfo.population,
			flag: countryInfo.flag,
			officialName: countryInfo.name.official,
			continents: countryInfo.continents,
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
