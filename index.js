import fs from 'fs'

import createIndexTemplate from './createIndexTemplate.js'
import createPackageTemplate from './createPackageTemplate.js'
import quesition from './question/index.js'
import { createConfig } from './config.js'
const answer = await quesition()
const inputConfig = createConfig(answer)
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
