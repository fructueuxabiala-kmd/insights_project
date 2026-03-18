export function errorHandler(err, req, res, next){
    console.error(err);

    // Erreurs mongoose fréquentes (simple)
    if(err.name ==="ValidationError"){
       return  res.status(400).json({
            error: {
                message: err.message
            }
        })
    }

     return  res.status(500).json({
            error: {
                message: "Internal Server Error st"
            }
        })
    
}