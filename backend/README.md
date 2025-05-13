# 🛠️ Backend 개발 가이드 (Express.js + Firebase)

---

## 📁 폴더 위치

```
/backend
```

---

## ⚙️ 사용 기술

- Node.js
- Express.js
- Firebase Admin SDK (for DB & 인증)
- dotenv (환경변수 관리)

---

## 🚀 프로젝트 실행 방법

1. **의존성 설치**
> ⚠️ 아직 `backend/` 폴더에 `package.json` 파일이 없다면 생략  
> 초기 세팅이 완료된 후, `package.json`이 생기면 아래 명령어로 의존성 설치
   ```bash
   cd backend
   npm install
   ```

2. **Firebase 서비스 계정 키 파일 받기**
   - [Firebase Console](https://console.firebase.google.com) 접속
   - 프로젝트 → 설정(톱니바퀴) → 서비스 계정 → 새 비공개 키 생성 → JSON 파일 다운로드
   - 해당 파일명을 `firebase-service-account.json`으로 바꾸고 `/backend` 폴더에 저장  
     ⚠️ 이 파일은 `.gitignore`에 반드시 추가되어야 함

3. **환경 변수 설정**
   - `.env.example` 참고해서 `.env` 생성
   ```env
   PORT=3000
   FIREBASE_DB_URL=https://your-project-id.firebaseio.com
   ```

4. **개발 서버 실행**
   ```bash
   npm run dev
   ```

---

## 📦 디렉토리 구조 예시

```
backend/
├── src/
│   ├── config/         # Firebase 초기화, 환경변수 설정
│   ├── routes/         # API 라우터
│   ├── controllers/    # API 로직 처리
│   └── services/       # DB 연결 함수들
├── firebase-service-account.json
├── .env
├── .gitignore
└── server.js
```

---

## 🔌 Firebase 초기화 코드 예시 (`src/config/firebase.js`)

```js
const admin = require("firebase-admin");
const serviceAccount = require("../../firebase-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DB_URL,
});

module.exports = admin;
```

---

## ✅ 개발 규칙 요약

- Firebase 관련 키 파일은 `.gitignore`로 보호
- Firebase 관련 코드 → `src/config/firebase.js` 또는 별도 모듈로 분리
- DB 관련 함수 → `services/firebaseService.js` 등으로 분리 권장

---

## 🧪 테스트 방법

- Postman으로 API 테스트 (e.g., GET `/status`, POST `/seat/request`)
- Firebase Console에서 실시간 DB 변화 확인 가능

---

🔥 실시간 데이터로 신뢰할 수 있는 좌석 상태 서버 만들기, 우리 팀이 해낸다!