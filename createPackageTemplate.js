import ejs from 'ejs'
import fs from 'fs'
export default (config) => {
    const indexTemplate = fs.readFileSync('./template/package.ejs')
    const code = ejs.render(indexTemplate.toString(), {
        packageName: config.packageName,
        middleware: config.middleware
    })
    return code
}