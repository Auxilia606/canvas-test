# CANVAS TEST PROJECT

MY FRONTENT TEMPLATE 기반 canvas api 및 web worker 테스트 프로젝트입니다.

참고: https://github.com/Auxilia606/my-frontend-template

## GIT-FLOW 브랜치 전략

- master : 제품으로 출시될 수 있는 브랜치
- develop : 다음 출시 버전을 개발하는 브랜치
- feature : 기능을 개발하는 브랜치
- release : 이번 출시 버전을 준비하는 브랜치
- hotfix : 출시 버전에서 발생한 버그를 수정하는 브랜치

## GIT-FLOW 커밋 전략

- Feat : 기능 추가
- Fix : 버그 수정
- Docs : 문서 작성 (주석 포함)
- Style : 스타일 수정 (위치, 색상 등)
- Refactor : 기존 코드 리팩토링
- Test : 테스트 작업
- Chore : 기타 잡무

### VSCODE 기능 관련

- user snippet (File > Preferences > Configure User Snippets)

```json
{
	"Functional Component": {
		"prefix": "tsfc",
		"body": [
			"import React from 'react'",
			"",
			"type ${TM_FILENAME_BASE}Props = {}",
			"",
			"export const ${TM_FILENAME_BASE}: React.FC<${TM_FILENAME_BASE}Props> = (props) => {",
			"\tconst {} = props;",
			"",
			"\treturn <div></div>;",
			"}",
			"",
		],
		"description": "Functional Component"
	},
	"Functional Component without Props": {
		"prefix": "tsfcp",
		"body": [
			"import React from 'react'",
			"",
			"export const ${TM_FILENAME_BASE}: React.FC = () => {",
			"\treturn <div></div>;",
			"}",
			"",
		],
		"description": "Functional Component"
	}
}
```


