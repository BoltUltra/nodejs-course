const dontenv = require('dotenv');
const app = require('./app');

dontenv.config({ path: './config.env' });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
