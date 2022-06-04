const one = (nextStep) => {
  setTimeout(() => {
    console.log("one");
    nextStep();
  }, 5000);
};

const two = (nextStep) => {
  setTimeout(() => {
    console.log("two");
    nextStep();
  }, 3000);
};

const three = (nextStep) => {
  setTimeout(() => {
    console.log("three");
    nextStep();
  }, 1000);
};

const four = () => {
  console.log("four");
};

// one(() => two(three));
one(() => two(() => three(four)));
// three();
// four();
