const library = {
    "books": [
        {
            "id": 1,
            "title": "salamander",
            "totalPages": 500,
            "rating": "8/10",
            "isbn": 720,
            "publishedDate": "21/05/1990",
            "authorId": 1,
            "publisherId": 1
        },
        {
            "id": 2,
            "title": "monitor",
            "totalPages": 501,
            "rating": "5/10",
            "isbn": 650,
            "publishedDate": "29/02/2000",
            "authorId": 2,
            "publisherId": 1
        }
    ],
    "authors": [
        {
            "id": 1,
            "name": "Dave Batista",
            "email": "smack@down.com",
            "dob": "11/01/1947"
        }
    ],
    "publishers": [
        {
                "id": 1,
                "name": "cobra",
                "email": "cobra@bites.com",
                "contact": "9900841845",
                "established": 1970
        }
    ]
}

module.exports = library;