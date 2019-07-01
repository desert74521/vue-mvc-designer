# vue-mvc-designer

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 模块化设计目录结构
+ src
	+ ppp---------------------------业务项目目录
		+ xxx-----------------------业务模块目录
			+ view------------------视图页面
			+ api-------------------api
			+ service---------------service
			+ dao-------------------dao
			+ model-----------------model
			- router----------------模块router

			----- 其他模块 -----

		+ common--------------------通用模块
			+ router----------------router
			+ store-----------------store
			+ api-------------------common apis
			+ dictionary------------数据字典
			- CommonDao-------------项目通用dao
			- CommonModel-----------项目通用model
			- CommonService---------项目通用逻辑处理
	+ platform
		- utils---------------------平台工具
		- BaseDao-------------------平台通用dao
		- BaseService---------------平台通用service
		- BaseModel-----------------平台通用model
	- App.vue
	- main.ts
	- router
	- store
