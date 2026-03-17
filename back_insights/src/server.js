

import app from "./app.js";
import { connectdb } from "./db/connect.js";
 
const PORT=process.env.PORT ?? 3001

await connectdb()

app.listen(PORT, ()=>{
    console.log(`Servé démarré avec succès sur le PORT ${PORT}
        Lien : http://localhost:${PORT}`);
    
})