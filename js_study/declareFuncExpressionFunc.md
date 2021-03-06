### **FuncDeclare & FuncExpression**

- 모두 함수를 새롭게 정의 할때 쓰이는 방식
- ["함수 선언 함수 표현"](execution/declareExpress.js)

### **FuncDeclare**

- 함수 정의부만 존재하고 별도의 할당 명령이 없는 것을 의미
- 함수 선언문의 경우 반드시 함수명이 정의 돼 있어야 한다.

### **FuncExpression**

- 정의한 함수를 별도의 변수에 할당하는 것을 말함.
- 함수명이 정의 돼 있지 않아도 됨.

> 함수명을 정의한 함수 표현식 => `기명 함수 표현식`
>
> 함수명을 정의하지 않은 함수 표현식 => `익명 함수 표현식`

### **ThreeMethods Function Express**

```js
function a() {} //함수 선언문. 함수명 a가 곧 변수명

var b = function () {}; //익명 함수 표현식. 변수명 b 가 곧 함수명
b();

var c = function d() {}; //기명 함수 표현식. 변수명은 c, 함수명은 d
c(); // 실행 OK
d(); // 에러
```

- 기명 함수 표현식은 외부에서는 함수명으로 호출 할 수 없음

- 과거에에는 함수명이 잘 출력 됐던 반면 익명 함수 표현식의 경우 `undefined` or `unnamed` 값이 나왔었다. 이 때문에 디버깅시 익명 함수 표현식 보다 유리했었음.

- 이제는 모든 브라우저들이 익명 함수 표현식의 변수명을 함수의 `name 프로퍼티`에 할당하고 있다.

### **Hoisting in FuncDeclare vs FuncExpression**

- 선언문의 경우 전체를 호이스팅 하는 반면
- 함수 표현식은 변수 선언부만 호이스팅 함
