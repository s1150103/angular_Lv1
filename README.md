# Todoアプリ

AngularとTypeScriptで作成されたシンプルなtodoアプリです。CRUD機能を備えた実用的なタスク管理ツールです。

## 機能

### ✅ 実装済み機能

- **todo一覧表示**: 登録されたtodoの一覧を表示
- **todo詳細表示**: 個別のtodoの詳細情報を表示
- **todo新規作成**: フォームを使用した新しいtodo作成
- **todo編集**: 既存のtodoの更新機能
- **todo削除**: 不要なtodoの削除機能
- **レスポンシブデザイン**: モバイルフレンドリーなUI
- **リアルタイム更新**: 操作後の即座な画面更新

## 技術スタック

- **フレームワーク**: Angular v20.x
- **言語**: TypeScript
- **スタイリング**: CSS
- **データ管理**: メモリ内ストレージ（永続化対応）
- **ルーティング**: Angular Router
- **開発ツール**: Angular CLI
- **コード品質**: ESLint + Prettier

## todoモデル

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
├── todos/              # todo一覧コンポーネント
├── todo-detail/        # todo詳細コンポーネント
├── todo-add/           # todo新規作成コンポーネント
├── todo-edit/          # todo更新コンポーネント
├── todo.service.ts     # todoサービス
├── message.service.ts  # メッセージサービス
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

1. **TOP** (`/`) → todo一覧にリダイレクト
2. **todo一覧** (`/todos`) → 全てのtodoを表示
3. **todo詳細** (`/detail/:id`) → 指定されたtodoの詳細
4. **todo新規作成** (`/add`) → 新しいtodoの作成
5. **todo編集** (`/edit/:id`) → 既存のtodoの編集

## 参考資料

このプロジェクトは[Angular Tour of Heroes tutorial](https://angular.jp/tutorial)の構造を参考に作成されています。

- [Angular公式ドキュメント](https://angular.jp/)
- [Template Driven Forms](https://angular.jp/guide/forms)
- [Angular Router](https://angular.jp/guide/router)

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。