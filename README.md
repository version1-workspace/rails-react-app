# React + Rails サンプルアプリ

React + Railsのプロジェクトの雛形アプリです。
サンプルとして、フロントのApp.jsからダミーのエンドポイントにリクエストを投げて、レスポンスを表示しています。


## 前提条件

- Node.jsがインストールされていること
- Railsコマンドがインストールされていること
- Yarnコマンドがインストールされていること
- MySQLがインストールされていること


## Api (Rails)


```shell
cd shell
bundle install --path vendor/bundle
bundle exec rails db:create
bundle exec rails s
```


## Web (React)


```shell
cd web
yarn
yarn start
```
