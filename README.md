This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 执行，构建与测试
### 执行
`yarn start`

### 构建
`yarn build`
`create react app`默认的webpack配置会将src中的代码打包到项目根目录的build目录下，供部署使用。

### 测试
`yarn test`
`create react app`已经为我们内置了Facebookjs单元测试框架Jest

- 测试文件名约束
    1. 测试文件必须放在src目录下级目录中
    2. 测试文件可以是_tests_文件夹下的*.js文件
    3. 测试文件可以是任何目录下的*.test.js文件或者*.spec.js文件

- 聚焦与排除
    1. 约定每个测试用例写在it()
    2. 使用fit()仅执行该测试用例
    3. 使用xit()排除该测试用例

- 测试覆盖率
    1. `npm test -- --coverage`
    2. 可在package.json中进行配置覆盖率限制
    ```
    {
      "jest": {
        "collectCoverageFrom": [
          "src/**/*.{js,jsx}",
          "!<rootDir>/node_modules/"
        ],
        "coverageThreshold": {
          "global": {
            "branches": 90,
            "functions": 90,
            "lines": 90,
            "statements": 90
          }
        },
        "coverageReporters": ["text"]
      }
    }
    ```
