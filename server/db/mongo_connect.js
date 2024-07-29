const mongoose = require('mongoose');
console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(
    // 'mongodb://localhost:27017/shop'
    // `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`
    `mongodb+srv://mosh:mosh1noa@cluster0.klays.mongodb.net/test?authMechanism=DEFAULT`

    );
  console.log('mongo connect');
}