const Pool = require("pg").Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pets',
    password: 'postgres',
    port: 5432
});

const getPets = (request, response) => {
    var responseReturn = new ResponseClass();
    pool.query('SELECT * FROM pets ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }

        responseReturn.status = true;
        responseReturn.code = 200;
        responseReturn.message = "Success";
        responseReturn.data = results.rows;

        response.status(200).json(responseReturn);
    })
}

const getPetById = (request, response) => {
    var responseReturn = new ResponseClass();
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM pets WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        if (results.rowCount == 0) {
            responseReturn.status = true;
            responseReturn.code = 404;
            responseReturn.message = "Pet not found";
            responseReturn.data = null;
        } else {
            responseReturn.status = true;
            responseReturn.code = 200;
            responseReturn.message = "Success";
            responseReturn.data = results.rows[0];
        }
        response.status(200).json(responseReturn);
    })
}

const createPet = (request, response) => {
    const { name, age, weight } = request.body;
    pool.query('INSERT INTO pets (name, age, weight) VALUES ($1, $2, $3)', [name, age, weight], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send("Pet added");
    })
}

const updatePet = (request, response) => {
    const id = parseInt(request.params.id);
    var responseReturn = ResponseClass();
    try {
        const { name, age, weight } = request.body;
        pool.query('UPDATE pets SET name = $1, age = $2, weight = $3 WHERE id = $4', [name, age, weight, id], (error, results) => {
            if (error) {
                throw error
            }

            responseReturn.status = true;
            responseReturn.code = 200;
            responseReturn.message = "Pet modification successed";
            responseReturn.data = null;
            response.status(200).send(responseReturn);
        })
    } catch (error) {
        responseReturn.status = false;
        responseReturn.code = 500;
        responseReturn.message = error.message;
        responseReturn.data = null
        response.status(500).json(responseReturn);
    }
}


module.exports = { getPets, createPet, updatePet, getPetById }