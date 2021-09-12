const getResult = (x) => {
  return function (func) {
    func(x);
  };
};

const api = getResult(1);
const api2 = getResult(2);
const api3 = getResult(3);

api(function (result) {
  console.log("result: ", result);
  api2(function (result2) {
    console.log("result2: ", result2);
    api3(function (result3) {
      console.log("result3: ", result3);
    });
  });
});
