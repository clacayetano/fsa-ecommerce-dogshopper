<<<<<<< HEAD
require('dotenv').config()
const app = require('./app')
const db = require('./db/db')
const PORT = process.env.PORT || 8000

db.syncAndSeed()
    .then(()=> app.listen(PORT, () => console.log(`\nBackend service running on port ${PORT}\n`)))
    
// try {
//     app.listen(PORT, () => console.log(`\nBackend service running on port ${PORT}\n`))
// } catch (e) {
//     console.error(`Failed to load app on port ${PORT}`)
// }
=======
/* load configs */
require('dotenv').config()
require('./config/passport-setup')

/* app setup */
const app = require('./app')
const db = require('./db')

const PORT = process.env.PORT || 8000

db.sync()
    .then(app.listen(PORT, () => console.log(`\nApplication running on port ${PORT}\n`)))
    .catch(e => console.error(`Failed to load app on port ${PORT} with error: ${e}`))
>>>>>>> 8c384d816c3719477da5d5aff3b18d5bb3635b3c
