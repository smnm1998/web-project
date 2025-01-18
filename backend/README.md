# 백엔드 프로젝트

이 프로젝트는 Express.js와 TypeScript를 사용하여 구축된 웹 애플리케이션입니다. 이 문서에서는 프로젝트의 구조와 설정 방법에 대해 설명합니다.

## 프로젝트 구조

```
backend
├── src
│   ├── app.ts               # 애플리케이션의 진입점
│   ├── controllers          # 컨트롤러 폴더
│   │   └── index.ts         # 루트 경로를 처리하는 컨트롤러
│   ├── routes               # 라우트 폴더
│   │   └── index.ts         # 애플리케이션의 라우트를 설정
│   └── types                # 타입 정의 폴더
│       └── index.ts         # 요청 및 응답 인터페이스
├── package.json             # npm 설정 파일
├── tsconfig.json            # TypeScript 설정 파일
└── README.md                # 프로젝트 문서
```

## 설치 방법

1. 이 저장소를 클론합니다.
   ```
   git clone <repository-url>
   ```

2. 프로젝트 디렉토리로 이동합니다.
   ```
   cd backend
   ```

3. 의존성을 설치합니다.
   ```
   yarn install
   ```

## 실행 방법

애플리케이션을 실행하려면 다음 명령어를 사용합니다.

```
npm start
```

## 기여

기여를 원하시는 분은 이 저장소를 포크한 후 변경 사항을 제출해 주세요. 

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다.