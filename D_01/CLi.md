# 명령어 환경 실습 코드

### 기본 CLI 명령

```sh
# <Dir> 디렉토리로 이동
cd <Dir>

# 디렉토리 리스트 출력
ls
```

### Git 관리 명령

```sh
# Git 버전 출력
git --version

# 프로젝트 신규/수정 파일(디렉토리) 관리 추가(add)
git add <file>
git add <dir>

# Git 관리 상태 확인
git status

# 모든(.) 변경사항 관리 추가
git add .

# 변경 이력 관리를 위한 커밋 메시지 등록
# 내 컴퓨터 저장소(Local Repository)에
git commit -m "commit message"

# 등록된 Git 원격(Remote) 저장소 별칭 및 주소 확인
git remote -v

# 원격 저장소에 업로드(push)
# 원격 저장소(Remote Repository)에
git push [origin] [master]

# 다른 원격 저장소 등록(별칭, 저장소 주소)
# 예) 포크(fork)한 저장소
git remote add <alias> <repo>

git remote -v
# origin (fetch)
# origin
# <alias> (fetch)
# alias

# 변경 이력 확인
git branch -va

# 다른 원격 저장소 패치
git fetch <alias>

# 다른 원격 저장소 업데이트 자료 다운로드(pull)
git pull <alias> <branch> e.g) git pull yamoo9 master

# 자신의 원격 저장소에 업로드(push)
git push
```