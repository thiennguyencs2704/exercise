const getResult = (x) => {
  return function () {
    return new Promise((resolve, reject) => {
      if (x >= 0) {
        resolve(x);
      } else {
        reject("Failed");
      }
    });
  };
};

const api = getResult(1);
const api2 = getResult(2);
const api3 = getResult(3);

api()
  .then(function (result) {
    console.log("result: ", result);
    return api2();
  })
  .then(function (result2) {
    console.log("result2: ", result2);
    return api3();
  })
  .then(function (result3) {
    console.log("result3: ", result3);
  })
  .catch(function (error) {
    console.log("error: ", error);
  });
