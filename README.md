# ✈️ matrip-web
메이트립 웹 클라이언트 저장소
<br>
## 🚩 협업 규칙
### Commit
1. 하나의 커밋에는 하나의 작업만 들어가 있는게 좋습니다.
2. 제목은 <b>type: 제목</b>으로 작성
   <br>
ex) feat: 로그인 기능 추가<br>
   [type 참고](https://velog.io/@bgshin13/GoogleAngular-Commit-Convention)
3. 커밋에 대한 설명은 자세하게 작성
   <br>
### Pull Request
1. <b>develop</b>으로 pull request
2. develop에서 작업하고 바로 커밋하지 않고 새로운 브랜치를 파서 작업, pull request
3. pull request 제목도 커밋 제목과 동일한 방식으로 작성
4. main으로 머지할 때는 모든 팀원들의 승인이 있어야 합니다.

### 코드 컨벤션
1. 들여쓰기는 탭 사용
2. var는 최대한 지양
3. 변수와 함수 이름은 <b>카멜 케이스</b>를 사용
4. 문장 종료시에는 <b>세미콜론(;)</b> 붙이기
5. <b>쌍따옴표(")</b> 사용
6. 한 줄 짜리 블록도 {}로 감싸고 줄바꿈
   ```javascript
   if (true){
    ...
   } else {
    ...
   }
   ```
7. 자식 컴포넌트가 없으면 항상 닫힘 태그 사용
   ```javascript
   //bad
   <Foo className="stuff"></Foo>

   //good
   <Foo className="stuff"/>
   ```
[더 많은 코드 컨벤션](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)

### 파일 구조
1. Components나 Pages 관련 파일들은 파일별로 폴더를 만들고 index.tsx를 사용
2. styles 안에는 전역으로 관리되는 스타일들 <br/>
예시)
```
src/
├── components/
│   ├── Header/
│   │   ├── index.tsx
│   │   └── headerStyle.tsx
│   │   └── ...
│   └── ...
├── pages/
│   ├── Main/
│   │   ├── index.tsx
│   │   └── mainComponents/
│   │   │   ├── ...
│   │   └── ...
│   └── ...
├── styles/
│   ├── GlobalStyles.tsx
│   └── ...
└── ...
```
