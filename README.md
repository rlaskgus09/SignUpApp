# 맘편한자리 (Momcomfortseat App)

🚇 **임산부 전용 지하철 좌석 예약 및 인증 앱**  
이 앱은 임산부가 지하철 좌석을 미리 예약하고, 인증을 통해 좌석을 사용할 수 있도록 돕습니다.

---

## 📦 프로젝트 구성

```
momcomfortseat-app/
├── frontend/     # 앱 (React Native)
├── backend/      # API 서버 (Node.js)
├── iot/          # 센서 제어 코드 (ESP32)
├── docs/         # 시나리오 및 회의록 문서
└── README.md
```

---

## 👥 팀원 역할 분담

| 이름 | 역할 | 주요 담당 |
|------|------|-----------|
| 김나현 | 프론트엔드 |  |
| 이서영 | 프론트엔드 |  |
| 허윤아 | 백엔드 |  |
| 홍서윤 | 팀장 |  |


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

## 브랜치 구조
- `main`: 배포용 (팀장이 관리)
- `dev`: 개발 통합 브랜치
- `feature/기능명`: 각자 기능 작업용 브랜치

## 작업 흐름
1. 최신 dev 브랜치로부터 작업 시작
2. `feature` 브랜치에서 개발
3. 커밋 & 푸시
4. Pull Request 생성 → 팀장 리뷰 → `dev` 브랜치로 병합

