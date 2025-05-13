# 🌐 Frontend 개발 가이드 (React Native + Expo)

## 📁 폴더 위치

```
/frontend
```

---

## 🛠️ 사용 기술

- **React Native**
- **Expo (CLI 기반)**
- **React Navigation**
- (필요 시) Firebase 연동

---

## 🚀 프로젝트 실행 방법

1. **프로젝트에 필요한 라이브러리 설치**
    ```bash
    npm install ~~ 등
    ```

2. **의존성 설치**
> ⚠️ 아직 frontend 디렉토리에 `package.json`이 없다면 이 단계는 생략 
> 초기 세팅이 완료되면 `npm install` 실행:

   ```bash
   cd frontend
   npm install
   ```

2. **Expo CLI 설치 (처음 한 번만)**
   ```bash
   npm install -g expo-cli
   ```

3. **프로젝트 실행**
   ```bash
   expo start
   ```

   - 웹 브라우저에서 QR코드 뜨면 휴대폰(Expo Go 앱 설치)으로 스캔하여 실행

---

## 🔑 환경 변수 (.env 사용 시)

- `.env.example` 파일 참고해서 `.env` 생성 후 사용
- 예시:
  ```
  API_URL=https://your-backend-url.com
  FIREBASE_API_KEY=your_firebase_key
  ```

---

## ✅ 개발 규칙 요약

- **컴포넌트명은 PascalCase**
- **커밋 메시지는 간단하고 명확하게**
- **작업 전 반드시 `git pull`**

---

## 🧪 테스트 및 디버깅 팁

- 모바일 디바이스에서 테스트 시 **Expo Go 앱 설치**
- 오류 로그는 터미널 or Expo 앱 내 확인 가능
- 디버깅은 Chrome 또는 React Native Debugger 사용 가능

---
