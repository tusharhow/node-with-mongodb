var MongoClient = require("mongodb").MongoClient;
var URL =
  "mongodb+srv://tushardb:CL4cWjqJUwoDq6rj@cluster0.xkw9u.mongodb.net?retryWrites=true&w=majority";
var config = { useUnifiedTopology: true };

MongoClient.connect(URL, config, function (error, MyMongoClient) {
  if (error) {
    console.log("Connection failed");
  } else {
    console.log("Connection Success");
//     InsertData(MyMongoClient);
    //     DeleteOneItem(MyMongoClient);
    DeleleAllItem(MyMongoClient);
  }
});

function InsertData(MyMongoClient) {
  var MyDataBase = MyMongoClient.db("school");
  var MyCollection = MyDataBase.collection("students");

  var MyData = { name: "Tushar", class: "ten", roll: "48", city: "Dhaka" };

  MyCollection.insertOne(MyData, function (error) {
    if (error) {
      console.log("Data Insert failed");
    } else {
      console.log("Data Insert Success");
    }
  });
}

function DeleteOneItem(MyMongoClient) {
  var MyDataBase = MyMongoClient.db("school");
  var MyCollection = MyDataBase.collection("students");

  var deleteItem = {
    roll: "48",
  };

  MyCollection.deleteOne(deleteItem, function (error) {
    if (error) {
      console.log("Data Delete failed");
    } else {
      console.log("Data Delete Success");
    }
  });
}

function DeleleAllItem(MyMongoClinet) {
  var MyDataBase = MyMongoClinet.db("school");
  var MyCollection = MyDataBase.collection("students");
  MyCollection.deleteMany(function (error, ResultObj) {
    if (error) {
      console.log("Delete Fail");
    } else {
      console.log(ResultObj.result.n + " Item Deleted");
    }
  });
}
