# 案件名

## フロントエンド開発

開発依存はgulpとwebpackです。  

### 開発依存
- [Node.js](http://nodejs.org/) v14.17.0
- [gulp](http://gulpjs.com/)
- [Volta](https://volta.sh/)
- [webpack](https://webpack.js.org/)

#### セットアップ
初回のセットアップです。

```
$ cd ./dev/frontend/gulp4
```

package-lock.jsonがあるディレクトリへ移動します。

```
$ npm ci
```

開発に必要なnpmパッケージをローカルインストールします。

#### 常駐タスク
```
$ npx gulp dev
```

開発に必要な常駐タスクを起動します。  
**本パッケージ内のリソースを編集・追加する場合は必ず実行してください**。




## ディレクトリ
```
.
├── README.md
│
├── dev                         // 開発用リソース
│   └── frontend                // フロントエンド用
│       ├── docs                //  ├ ドキュメント置き場
│       │    ├── components     //      ├ UIコンポーネントリスト
│       │    └── pagelist       //      └ ページリスト
│       ├── gulp                //  ├ gulpファイル
│       │    ├── gulpfile.js
│       │    :
│       └── src                 //  └ ソース置き場
│            ├── sass           //      ├ Sass(SCSS)
│            ├── js             //      ├ JS
│            └── template       //      └ 中間ファイル置き場
│                  ├── _include
│                  ├── xxx.ejs
│                      :
│
├── dist                            // 公開用ディレクトリ
│   └── html                        // htmlルートディレクトリ
│       ├── assets                  // リソース
│       │   ├── css
│       │   │   ├── 各フォルダ
│       │   │   :
│       │   │   └── styles.css // Sassのビルド  ※こちらは触らない
│       │   │
│       │   ├── img
│       │   │   ├── 各フォルダ
│       │   │   :
│       │   │
│       │   └── js
│       │       └── bundle.js   // JSのビルド  ※こちらは触らない
│       │ 
│       ├── _dev                // ドキュメントビルド  ※こちらは触らない
│       │   ├── components
│       │   ├── template
│       │   └── pagelist
│       │
│       ├── 各フォルダ
│       :
│       └── index.html
```
