import express from "express";
import connection from "./connection.js"; // Ensure .js is added

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ data: "Yoo" });
});

//Document get api
router.get("/Document-Get", (req, res) => {
    const query = "SELECT * FROM document";
    connection.query(query, (err, rows) => {
        if (err) {
            res.json({ error: err });
        } else {
            res.json(rows);
        }
    });
});

//Document set api
router.post("/Document-Set", (req, res) => {
    const { document } = req.body;
    
    const query = "INSERT INTO document  VALUES ("+document.id+",'"+document.title+"','"+document.desc+"',"+document.rating+",'"+document.clase+"',"+document.level+",'"+document.subject+"','"+document.postedby+"',"+document.isapproved+",'"+Load_File(`'${document.file}'`)+"')";
    connection.query(query, [document], (err, rows) => {
        if (err) {
            res.json({ error: err });
            } else {
                res.json({ message: "Document added" });
                }
                
    })
});


//User get api
router.get("/User-Get", (req, res) => {
    const query = "SELECT * FROM user";
    connection.query(query, (err, rows) => {
        if (err) {
            res.json({ error: err });
        } else {
            res.json(rows);
        }
    });
});

//User set api
router.post("/user-Set", (req, res) => {
    const { user } = req.body;
    
    const query = "INSERT INTO user  VALUES ("+user.id+",'"+user.name+"','"+user.email+"','"+user.password+"','"+user.isadmin+")";
    connection.query(query, [user], (err, rows) => {
        if (err) {
            res.json({ error: err });
            } else {
                res.json({ message: "Document added" });
                }
                
    })
});



export default router;
