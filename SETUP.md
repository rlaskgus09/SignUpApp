
# 맘편한자리 (Mom-Comfy-Seat App)

🚇 **임산부 전용 지하철 좌석 예약 및 인증 앱**  
이 앱은 임산부가 지하철 좌석을 미리 예약하고, 인증을 통해 좌석을 사용할 수 있도록 돕습니다.

---

## 📦 프로젝트 구성

```
mom-comfy-seat-app/
├── frontend/     # 앱 (React Native)
├── backend/      # API 서버 (Node.js)
├── iot/          # 센서 제어 코드 (ESP32)
├── docs/         # 시나리오 및 회의록 문서
└── README.md     # 이 문서
```

---

## 👥 팀원 역할 분담

| 이름 | 역할 | 주요 담당 |
|------|------|-----------|
| 김나현 | 프론트엔드 | 화면 UI, React Native 앱 |
| 허윤아 | 백엔드 | API 서버, 인증, DB |
| 홍서윤 | 팀장, 백엔드 총괄 | 프로젝트 구조, 전체 관리 |
| 이서영 | 프론트엔드 | 예약 기능, IoT 연동 |

---

## 🛠 개발 환경 안내

| 항목 | 설명 |
|------|------|
| 프론트엔드 | React Native + Expo |
| 백엔드 | Node.js + Express |
| DB / 인증 | Firebase |
| OCR | Tesseract / Google Vision API |
| IoT | ESP32, 센서, MQTT |
| API | 서울교통공사 API 사용 |

---

## 📱 프론트엔드 (React Native 앱)

### 💡 먼저 환경 설정부터

#### ✅ [공통 필수] Node.js 설치
- 👉 [https://nodejs.org](https://nodejs.org) 들어가서 설치 (권장: Node 18 이상)

#### ✅ [공통 필수] Expo CLI 설치
```bash
npm install -g expo-cli
```

---

### 🖥 macOS 사용자용

#### 1단계: frontend 폴더로 이동
```bash
cd frontend
```

#### 2단계: Expo 프로젝트 설치
```bash
npm install
```

#### 3단계: 앱 실행
```bash
npx expo start
```

#### 4단계: QR 코드 → 아이폰 또는 안드로이드 폰으로 스캔 (Expo Go 앱 필요)

---

### 💻 Windows (Android) 사용자용

#### 1단계: `Git Bash` 또는 `VS Code` 터미널 열기

#### 2단계: frontend 폴더로 이동
```bash
cd frontend
```

#### 3단계: Expo 의존성 설치
```bash
npm install
```

#### 4단계: 앱 실행
```bash
npx expo start
```

#### 5단계: QR 코드 → Android 기기에서 Expo Go 앱으로 스캔

---

## 🔧 백엔드 실행 (Node.js API 서버)

### 설치 방법 (공통)

#### 1단계: backend 폴더로 이동
```bash
cd backend
```

#### 2단계: 필요한 패키지 설치
```bash
npm install
```

#### 3단계: 환경 파일 `.env` 만들기
`backend/.env.example` 파일을 복사해서 `.env` 파일로 저장하고, Firebase 키 등 입력

```bash
cp .env.example .env
```

#### 4단계: 서버 실행
```bash
npm run dev
```

> 포트는 기본적으로 `http://localhost:3000` 입니다.

---

## 📡 IoT (센서 제어용)

- `iot/firmware/seat_status.ino` 파일을 Arduino IDE에서 열어 ESP32에 업로드
- 센서가 좌석 상태를 감지하면 → LED 색상 및 상태값 전송

---

## 🔗 주요 기술 스택

| 구분 | 사용 기술 |
|------|-----------|
| 모바일 앱 | React Native, Expo |
| 백엔드 | Node.js, Express.js, Firebase |
| 인증 | Firebase Auth, JWT |
| OCR | Tesseract, Google Vision |
| 좌석 상태 | MQTT, WebSocket |
| 하드웨어 | ESP32, FSR 센서, HX711, LED |

---

## ✅ Git 브랜치 규칙

| 유형 | 규칙 예시 |
|------|----------|
| 기능 추가 | `feat/login-ui` |
| 버그 수정 | `fix/ocr-error` |
| 화면 디자인 | `ui/reservation` |

---

## 🤝 협업 방식

- 메인 브랜치: `main` (배포용)
- 개발 브랜치: `dev`
- 작업 브랜치: 각자 `feat/`, `fix/` 등으로 나눠서 작업 후 → PR 보내기
- Notion / Figma로 UI, 일정 정리

---

## 📂 기타 폴더 설명

| 폴더명 | 설명 |
|--------|------|
| frontend | 앱 소스 코드 |
| backend | 서버 API |
| docs | 시나리오, 회의록, API 명세서 등 |
| iot | Arduino 코드 및 센서 세팅 |

---

## ✨ 사용법이 너무 어렵다구요?

> 👉 **그럼 이렇게 해보세요:**

1. `frontend` 폴더에서 `npm install`
2. `npx expo start`로 앱 실행
3. 폰에서 QR 코드 스캔 후 테스트!
4. `backend` 폴더에서 `npm install`, `.env` 만들고 `npm run dev` 실행

언제든 질문은 GitHub 이슈나 Notion에 작성해주세요 🙌
