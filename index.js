const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* START CONTROLLERS HERE */
const productsController = require('./controllers/products')
app.use('/api/product', productsController)
/* END CONTROLLERS HERE */

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});