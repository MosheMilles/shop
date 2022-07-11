const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(
    // 'mongodb://localhost:27017/shop'
    'mongodb+srv://mosh:mosh1noa@cluster0.klays.mongodb.net/shop'

    );
  console.log('mongo connect');
}