export function notFound(req,res){
    res.status(404).json({
        error: {
            message: "Not found"
        },
        path: req.originalUrl
    })
}