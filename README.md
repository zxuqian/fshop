# FShop 未来电子商务平台
> FShop将致力于提供完整的电商服务功能，结合大数据、机器学习、人工智能技术打造人性化商业服务和用户服务。

FShop 项目为电子商务系统的后台服务，提供基于 RESTful 的API接口和使用 React 开发的后台管理界面。项目将预计提供以下功能：

- 产品管理
- 库存管理
- 分销管理
- 订单管理
- 财务管理
- 物流管理
- 会员管理
- 优惠券
- 活动管理
- 积分管理
- 消费者行为分析
- 产品推荐
- 人工智能客服
- 报表
- 工作流
- 系统设置

## 主要技术架构
项目的技术架构将不限制于一种，后期会采用微服务架构，使用合适的语言编写对应的服务。目前所用技术如下：

### 数据库
MySQL 8.0

### 后台服务
Kotlin 1.2.41

Jakarta EE 7

Wildfly Swarm 2018.5.0

Maven 3.3.9


### 后台管理
Node.js 8.4.0

React 16.4.0

React-router-dom 4.3.1

Redux 5.0.7

Redux-thunk 2.3.0

axios: 0.18.0

Bulma 0.7.1

node-sass-chokidar 1.3.0

react-fontawesome: 0.0.20



## 运行项目

克隆仓库：

```
git clone https://github.com/zxuqian/fshop.git
```

运行后台项目：

```
cd fshop_wildfly
mvn mvn wildfly-swarm:run
```

运行后台管理界面应用：

```
cd fshop_admin
npm install
npm start
```

## 版本更新历史

* 0.0.1
    项目进行中
    * 变更: 搭建项目开发环境
    * 功能: 实现添加产品后台API
    * 功能: 实现前台调用API添加产品

## 项目信息

开发者：张旭乾 – [@乾儿_Polaris](https://weibo.com/jeffava) – zxuqian@163.com

微信：17803227910

基于MIT协议分发，详见 ``LICENSE``。

[https://github.com/zxuqian/fshop](https://github.com/zxuqian/fshop)

## 协作

## 捐助
:dollar: :dollar:
项目开发不易，还请大家能够施以援手让项目持续进行下去。支付宝账号：zxuqian@gmail.com，或添加微信进行转账。
