# Leadership Program Recommendation Test

리더십 프로그램 추천 테스트 랜딩 페이지입니다. 6가지 결과 유형과 3D 동물 캐릭터, 추천 프로그램 카드, 구글폼 CTA가 포함되어 있습니다.

## 기술 스택

- Vite
- React
- Tailwind CSS
- Framer Motion

## 폴더 구조

```txt
leadership-program-test/
├─ public/
│  └─ characters/
│     ├─ self-growth.png
│     ├─ practical-influence.png
│     ├─ performance-leader.png
│     ├─ change-leader.png
│     ├─ people-centered.png
│     └─ future-transition.png
├─ src/
│  ├─ components/
│  ├─ data/
│  ├─ lib/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.js
```

## 실행 방법

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
npm run preview
```

## 배포

Vercel, Netlify, Cloudflare Pages 등 정적 프론트엔드 배포 환경에 그대로 올릴 수 있습니다.

- Build command: `npm run build`
- Output directory: `dist`

## 구글폼 CTA 수정 위치

`src/data/constants.js` 파일의 `GOOGLE_FORM_URL` 값을 바꾸면 모든 CTA 버튼에 반영됩니다.

```js
export const GOOGLE_FORM_URL = "...";
```

현재 CTA 버튼명은 `교육별 상세 커리큘럼 받기`입니다.

## 결과 유형

1. 자기주도 성장형
2. 실무 영향력 확장형
3. 성과관리 리더형
4. 변화주도 리더형
5. 사람중심 리더형
6. 미래전환 리더형
