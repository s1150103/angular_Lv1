# Angular ToDo App (Lv1)

Angular Tutorial に基づいたToDoアプリケーションです。NgModulesとTemplate Driven Formを使用して実装されています。

## 機能

### ✅ 実装済み機能 (Lv1)

- **ToDoの一覧表示**: 登録されたToDoの一覧を表示
- **ToDoの詳細表示**: 個別のToDoの詳細情報を表示
- **ToDoの新規作成**: Template Driven Formを使用したToDo作成
- **ToDoの更新**: 既存のToDoの編集（初期値設定済み）
- **ToDoの削除**: 一覧・詳細・更新画面からの削除機能
- **ルーティング**: 各画面間のナビゲーション

## 技術仕様

- **Angular**: v20.x
- **アーキテクチャ**: NgModules（standalone: false）
- **フォーム**: Template Driven Form
- **データ管理**: In-Memory Web API
- **ルーティング**: Angular Router
- **コード品質**: ESLint + Prettier

## ToDoモデル

```typescript
export interface Todo {
  id: number;
  title: string;
  description: string;
}
```

## プロジェクト構成

```
src/app/
├── todos/              # ToDo一覧コンポーネント
├── todo-detail/        # ToDo詳細コンポーネント
├── todo-add/           # ToDo新規作成コンポーネント
├── todo-edit/          # ToDo更新コンポーネント
├── todo.service.ts     # ToDoサービス
├── in-memory-data.service.ts  # 初期データ管理
├── app-routing-module.ts      # ルーティング設定
└── app-module.ts       # アプリケーションモジュール
```

## 開発環境のセットアップ

### 必要な環境
- Node.js (v18以上)
- npm
- Angular CLI

### インストール

```bash
# プロジェクトのクローン
git clone https://github.com/s1150103/angular_Lv1.git
cd angular_Lv1

# 依存関係のインストール
npm install
```

### 開発サーバーの起動

```bash
npm start
# または
ng serve
```

アプリケーションは http://localhost:4200 で起動します。

### その他のコマンド

```bash
# ビルド
npm run build

# テスト実行
npm test

# ESLintでコードチェック
npm run lint

# Prettierでコードフォーマット
npm run format

# フォーマットチェック
npm run format:check
```

## 画面遷移

1. **TOP** (`/`) → ToDo一覧にリダイレクト
2. **ToDo一覧** (`/todos`) → 全てのToDoを表示
3. **ToDo詳細** (`/detail/:id`) → 指定されたToDoの詳細
4. **ToDo新規作成** (`/add`) → 新しいToDoの作成
5. **ToDo編集** (`/edit/:id`) → 既存のToDoの編集

## 参考資料

このプロジェクトは[Angular Tour of Heroes tutorial](https://angular.jp/tutorial)の構造を参考に作成されています。

- [Angular公式ドキュメント](https://angular.jp/)
- [Template Driven Forms](https://angular.jp/guide/forms)
- [Angular Router](https://angular.jp/guide/router)

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。