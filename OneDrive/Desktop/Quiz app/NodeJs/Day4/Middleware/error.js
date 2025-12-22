function error(req,res,auth,next){
    console.error(error.stack);

    res.status(500).json({
        success: false,
        message: "internal Server Error",
    });
    next()

}

module.exports = error;