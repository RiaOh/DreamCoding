// async & await
// clear style of using promise

//1. async
function fetchUser() {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return "🍎";
}

async function getBanana() {
  await delay(3000);
  return "🍌";
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
