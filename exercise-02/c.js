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

const printResults = async () => {
  try {
    const result = await api();
    console.log("result: ", result);

    const result2 = await api2();
    console.log("result2: ", result2);

    const result3 = await api3();
    console.log("result3: ", result3);
  } catch (err) {
    console.log("error: ", err);
  }
};

printResults();
