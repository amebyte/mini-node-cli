import fs from 'fs'
import createIndexTemplate from './createIndexTemplate.js'
import createPackageTemplate from './createPackageTemplate.js'

const inputConfig = {
    packageName: 'cli',
    port: 8080,
    middleware: {
        static: true,
        router: false
    }
}

// 1. 创建文件夹
fs.mkdirSync(getRootPath())
// 2. 创建入口文件 -> index.js
fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(inputConfig))
// 3. 创建package.json
fs.writeFileSync(`${getRootPath()}/package.json`, createPackageTemplate(inputConfig))
// 4. 安装依赖

function getRootPath() {
    return './cli'
}
