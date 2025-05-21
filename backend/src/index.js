// 테스트 용 간단한 페이지 만들엇어요.

const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("서버 실행 중");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});