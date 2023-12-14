// 1. Producer
const promise = new Promise((resolve, reject) => {
  console.log("doing something..");
  setTimeout(() => {
    reject(new Error("no network"));
  }, 2000);
});
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //닭을 받아온다.
  .then((hen) => getEgg(hen)) //콜백함수를 전달할 때 받아온 value를 다음 함수에 바로 호출하는 경우 생략이 가능하다.
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));
