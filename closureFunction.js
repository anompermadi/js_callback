// sample 1
const greeting = (greet) => {
  // closure
  const withName = (name) => {
    console.log(`${greet} ${name}`);
  };

  return withName;
};

// const sayHi = greeting("hi");
// const sayHello = greeting("hello");
// const sayWelcome = greeting("welcome");

// sayHi("Anom");
// sayHello("Anom");
// sayWelcome("Anom");

greeting("Hoi")("bro");

//sample 2
const cariKelipatan = (angkaKelipatan) => {
  const withNumber = (number) => {
    if (number % angkaKelipatan == 0) {
      console.log(`${number} adalah kelipatan dari ${angkaKelipatan}`);
    } else {
      console.log(`${number} adalah bukan kelipatan dari ${angkaKelipatan}`);
    }
  };
  return withNumber;
};

const kelipatanTiga = cariKelipatan(3);
const kelipatanLima = cariKelipatan(5);

// cariKelipatan(4)(30);
kelipatanTiga(9);
kelipatanLima(25);
