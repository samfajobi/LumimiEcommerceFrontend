const Jwt = require("jsonwebtoken");



const verifyToken =  ( req, res, next) => {
    const authHeader = req.headers.token

    if(authHeader) {
        const token = authHeader.split(" ")[1]
        Jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            if(err) res.status(403).json("Token Not Valid!!")
            req.user = user;
            next()
        })

    } else {
        return res.status(500).json("Token Not Found!! Not Authenticated!!")
    }
}

// Error: req.user.others is only working for ids i.e req.id, and not working for others....

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken( req, res ,() => {
        if( req.user.id === req.params.id || req.user.isAdmin) {
            next()

        } else {
            res.status(403).json("Access Denied!!")
        }
    })
};



const verifyTokenAndisAdmin = ( req, res, next) => {
    verifyToken( req, res, () => {
        if( req.user.isAdmin) {
            next()

        } else {
            res.status(403).json(`Error!! ${req.user.isAdmin}`)
        }
    })   
}



module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndisAdmin };