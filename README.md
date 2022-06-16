# KT Map API 사용 예시 어플리케이션

KT Map API 를 Vue3 + Typescript 프로젝트에서 사용하는 방법에 대한 예시입니다.

# 사용법

```shell
pnpm install
pnpm run dev
```

# 프로젝트 세팅방법

## 1. index.html 에 KT Map API 주입하기
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/javascript" src="https://gis.kt.com/maps/v3.0/sdk.js?key=642dd03a4712cef8bb36de4d06f8dd86565a738470cb4c697fa6cbcff6f8c65c6a66b0c4" ></script> <-- 해당 구문을 추가 후 발급받은 KT SDK Key 를 여기에 입력하시면 됩니다.
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>

```

## 2. kt.d.ts 추가하기
src/types 폴더내에 kt.d.ts 를 추가 후 필요한 type 정의를 해줍니다. (ktMap.d.ts 를 제공하고 있지 않습니다. 필요한 타입 정의는 직접 해야합니다.)

## 3. API 사용하기
KT API 는 script 가 DOM 에 mounting 될때 자동으로 불러와집니다. 기 선언된 kt.d.ts 를 통해 olleh.maps 객체에 접근 가능합니다.


