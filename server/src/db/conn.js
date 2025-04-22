const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/TheBotanicScannerRegistration', {
//   useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true,
})
  .then(() => {
    console.log('DB Connected');
  })
  .catch((err) => {
    console.log('Connection Error:', err);
  });