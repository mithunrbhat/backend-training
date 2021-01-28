const mockJson = require('../mock-json');
const mockObj = JSON.parse(mockJson);

function getAll(req, res) {

    res.json(mockObj.books)
}

module.exports = {getAll}