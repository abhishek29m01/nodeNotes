const requestFilter = (req, res, next) => {
    const { city, category } = req.query;  // Destructure directly from query

    // Check if both are present
    if (!city || !category) {
        res.send("Please select city or category from filter");
    } else if (city === "durg" && category === "girls") {
        res.send('All PG in durg are listed for girls');
        console.log("All PG in durg are listed for girls")
    } else {
        // Attach to request for later access
        req.city = city;
        req.category = category;
        next(); // Pass control to next middleware/route
    }
};

module.exports = requestFilter;
