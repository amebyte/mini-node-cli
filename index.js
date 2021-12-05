import fs from 'fs'

// 1. 创建文件夹
fs.mkdirSync(getRootPath())
// 2. 创建入口文件 -> index.js
fs.writeFileSync(`${getRootPath()}/index.js`, 'index')
// 3. 创建package.json
fs.writeFileSync(`${getRootPath()}/package.json`, 'package')
// 4. 安装依赖

function getRootPath() {
    return './cli'
}
