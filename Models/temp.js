/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    $match: {
      product: new ObjectId('627e066d73c4895cbb1acd74'),
    },
  },
  {
    $group: {
      _id: '$product',
      averageRating: {
        $avg: '$rating',
      },
      numOfReviews: {
        $sum: 1,
      },
    },
  },
];

MongoClient.connect(
  '',
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (connectErr, client) {
    assert.equal(null, connectErr);
    const coll = client.db('').collection('');
    coll.aggregate(agg, (cmdErr, result) => {
      assert.equal(null, cmdErr);
    });
    client.close();
  }
);
