console.log("1");
setTimeout(function () {
  console.log("2");
}, 1000);
console.log("3");

function printImmediately(print) {
  print(); //callback함수를 받아서 바로 실행
}

printImmediately(() => console.log("hello"));

// 사용자의 data를 backend에서 받아오기
class UserStorage {
  // 총 2가지의 API가 있다.
  loginUser(id, password, onSuccess, onError) {
    //사용자를 login하는 것
    //id, password를 받아오기.
    //login이 정상적으로 이루어졌다면 onSuccess콜백함수 호출
    //login실패 -> onError콜백함수 호출
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    //사용자의 data를 받아서 역할을 서버에 요청.
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage(); //class를 이용하여 backend와 통신
const id = prompt("enter your id"); //사용자에게 id를 받아온다. 브라우저 API 중 하나인 prompt]
const password = prompt("password"); //사용자에게 id를 받아온다. 브라우저 API 중 하나인 prompt
userStorage.loginUser(
  id,
  password,
  (id) => {
    userStorage.getRoles(
      id,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
