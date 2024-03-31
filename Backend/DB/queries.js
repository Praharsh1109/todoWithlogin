
const client = require('./Db')

const zod = require('zod')

const zodCheck = zod.object({
    username : zod.string(),
    password : zod.string(),
    firstname: zod.string()
})

 const registrationQuery = (req,res)=> {
    const {username,password,firstname} = req.body
    const validationResult = zodCheck.safeParse({username,password,firstname})
    if (!validationResult.success) {
        res.status(400).json({ error: "Validation error", errors: validationResult.error.errors });
        return;
    }

    const { data } = validationResult;
    client.query(
        `INSERT INTO todo(username, password, firstname) VALUES ($1, $2, $3)`,
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

const selectQuery = (req,res)=>{
    client.query("SELECT * FROM todo", (err, result) => {
        if (err) {
            console.error("Error retrieving students:", err);
            res.status(500).json({ error: "Failed to retrieve students" });
        } else {
            res.status(200).json(result.rows);
        }
    });
}

module.exports = {
    registrationQuery,selectQuery
};