# Todo List - Next.js 기반 투두 리스트

## 🚀 기술 스택

| React                                 | Next.js 15                             | TypeScript                              |
|---------------------------------------|----------------------------------------|-----------------------------------------|
| ![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black) | ![Next.js](https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=next.js&logoColor=white) | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) |

### Styling
| Tailwind CSS                          | Tailwind Merge                          |
|---------------------------------------|---------------------------------------|
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white) | ![Tailwind Merge](https://img.shields.io/badge/Tailwind%20Merge-06B6D4?style=for-the-badge&logo=Tailwind-Merge&logoColor=white) |

### State Management & Library


| Tanstack Query                        |
|---------------------------------------|
| ![Tanstack Query](https://img.shields.io/badge/tanstack%20query-61DAFB?style=for-the-badge&logo=reactquery&logoColor=black) |


### Backend & Database
| JSON-SERVER                              |
|---------------------------------------|
| ![Supabase](https://img.shields.io/badge/jsonserver-3FCF8E?style=for-the-badge&logo=jsonserver&logoColor=white) |

### Development Tools
| VSCode                                | Yarn Berry                                   |
|---------------------------------------|---------------------------------------|
| ![VSCode](https://img.shields.io/badge/vscode-61DAFB?style=for-the-badge&logo=vscode&logoColor=black) | ![Yarn](https://img.shields.io/badge/yarn%20berry-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white) |

### Technology Stack
| App Router                            |
|---------------------------------------|
| ![App Router](https://img.shields.io/badge/App%20Router-000000?style=for-the-badge&logo=next.js&logoColor=white) |


### Version Control
| Git                                   | GitHub                                 |
|---------------------------------------|----------------------------------------|
| ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white) |

### Deployment & Hosting
| Vercel                                | Glitch                                |
|---------------------------------------|---------------------------------------|
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white) |![glitch](https://img.shields.io/badge/glitch-3333FF?style=for-the-badge&logo=glitch&logoColor=white) |

## ✨ 주요 기능

### - TODO LIST 조회
### - TODO LIST 추가
### - 완료 여부 토글
### - 삭제 기능
### - 완료/미완료 필터링 탭

## 🧱 폴더 구조
```
📦src
 ┣ 📂api
 ┃ ┗ 📜Todos.ts
 ┣ 📂app
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜not-found.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┗ 📜Spinner.tsx
 ┃ ┣ 📂molecules
 ┃ ┃ ┣ 📜TodoForm.tsx
 ┃ ┃ ┗ 📜TodoItem.tsx
 ┃ ┣ 📂organisms
 ┃ ┃ ┣ 📜TodoFilterTabs.tsx
 ┃ ┃ ┗ 📜TodoList.tsx
 ┃ ┣ 📂providers
 ┃ ┃ ┗ 📜queryProvider.tsx
 ┃ ┗ 📂templates
 ┃ ┃ ┗ 📜MainLayout.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useCreateTodo.ts
 ┃ ┣ 📜useDeleteTodo.ts
 ┃ ┣ 📜useTodos.ts
 ┃ ┗ 📜useUpdateTodo.ts
 ┣ 📂types
 ┃ ┗ 📜todo.ts
 ┗ 📂utils
 ┃ ┗ 📂cn
 ┃ ┃ ┗ 📜util.ts
```

## 🌐 배포 주소
**`배포 링크`** : [ 🔗 Vercel 배포 링크](https://todo-lyart-omega.vercel.app/)
