
const client = require('./Db')

const zod = require('zod')

const zodCheck = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstname: zod.string()
})

const registrationQuery = (req, res) => {
    const { username, password, firstname } = req.body
    const validationResult = zodCheck.safeParse({ username, password, firstname })
    if (!validationResult.success) {
        res.status(400).json({ error: "Validation error", errors: validationResult.error.errors });
        return;
    }

    const { data } = validationResult;
    client.query(
        `INSERT INTO signup(username, password, firstname) VALUES ($1, $2, $3)`,
        [data.username, data.password, data.firstname],
        (err, result) => {
            if (err) {
                console.error("Error inserting student:", err);
                res.status(500).json({ error: "Failed to insert student" });
            } else {
                res.status(200).json({ message: "Student inserted successfully" });
            }
        }
    );
}

const selectQuery = (req, res) => {
    client.query("SELECT * FROM public.signup", (err, result) => {
        if (err) {
            console.error("Error retrieving students:", err);
            res.status(500).json({ error: "Failed to retrieve students" });
        } else {
            res.status(200).json(result.rows);
        }
    });
}

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if username exists in the database
        const userResult = await client.query('SELECT * FROM signup WHERE username = $1', [username]);

        if (userResult.rows.length === 0) {
            // Username does not exist
            return res.status(404).json({ message: 'Username not found' });
        }

        // Check if the password matches
        const user = userResult.rows[0];
        if (user.password !== password) {
            // Password incorrect
            return res.status(401).json({ message: 'Incorrect password' });
        }

        // Login successful
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    registrationQuery, selectQuery, login
};