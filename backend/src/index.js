// 테스트 용 간단한 페이지 만들엇어요.

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("안녕하세요!");
});
app.listen(3000, () => console.log("3000포트에서 대기 중..."));
