# Todoアプリ (Angular v17 + NgModules)

Angular v17とNgModulesアーキテクチャで作成された、Tour of Heroesスタイルのデザインを適用したtodoアプリです。

## プロジェクト概要

Angular v17の最新機能を活用しながら、従来のNgModulesアーキテクチャで構築されたCRUD機能完備のタスク管理アプリケーションです。

## 技術スタック

- **フレームワーク**: Angular v17.3.17
- **アーキテクチャ**: NgModules（非standalone）
- **言語**: TypeScript
- **スタイリング**: CSS（Tour of Heroesベース）
- **フォーム**: Template-driven Forms
- **ルーティング**: Angular Router
- **開発ツール**: Angular CLI

## 機能

### ✅ 実装済み機能

- **todo一覧表示**: 登録されたtodoをカード形式で表示
- **todo詳細表示**: 個別のtodoの詳細情報を表示
- **todo新規作成**: フォームを使用した新しいtodo作成
- **todo編集**: 既存のtodoの更新機能
- **todo削除**: 不要なtodoの削除機能
- **レスポンシブデザイン**: Tour of Heroesスタイルの美しいUI
- **リアルタイム更新**: 操作後の即座な画面更新

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
├── todo.service.ts     # todoサービス（メモリ内データストレージ）
├── todo.ts            # todoインターフェース
├── app-routing.module.ts # ルーティング設定
└── app.module.ts      # アプリケーションモジュール
```

## 開発環境のセットアップ

### 必要な環境
- Node.js (v18以上)
- npm
- Angular CLI v17

### インストール

```bash
# プロジェクトのクローン
git clone https://github.com/s1150103/angular_Lv1.git
cd angular_Lv1/angular-todo-v17

# 依存関係のインストール
npm install
```

### 開発サーバーの起動

```bash
npm start
# または
ng serve
```

アプリケーションは `http://localhost:4200` で起動します。

### その他のコマンド

```bash
# ビルド
ng build

# テスト実行
ng test

# E2Eテスト
ng e2e
```

## 画面遷移

1. **TOP** (`/`) → todo一覧にリダイレクト
2. **todo一覧** (`/todos`) → 全てのtodoをカード形式で表示
3. **todo詳細** (`/detail/:id`) → 指定されたtodoの詳細
4. **todo新規作成** (`/add`) → 新しいtodoの作成フォーム
5. **todo編集** (`/edit/:id`) → 既存のtodoの編集フォーム

## デザインの特徴

- **Tour of Heroesスタイル**: Angular公式チュートリアルのデザインパターンを採用
- **カード型レイアウト**: 見やすく整理されたtodo表示
- **色分けされたボタン**: 機能別に色分け（保存：青、削除：赤、編集：緑）
- **ホバー効果**: インタラクティブなUI要素
- **フォーカス効果**: フォーム入力時の視覚的フィードバック

## Angular v17の特徴

- 最新のTypeScriptサポート
- 向上したパフォーマンス
- NgModuleとstandalone componentsの両方をサポート
- 新しいControl Flow構文（@if, @for）対応

## 参考資料

- [Angular公式ドキュメント](https://angular.jp/)
- [Angular Tour of Heroes](https://angular.jp/tutorial)
- [Template Driven Forms](https://angular.jp/guide/forms)
- [Angular Router](https://angular.jp/guide/router)

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
