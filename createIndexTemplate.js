import ejs from 'ejs'
import fs from 'fs'
export default () => {
    const indexTemplate = fs.readFileSync('./template/index.ejs')
    const code = ejs.render(indexTemplate.toString(), {
        static: false,
        router: false
    })
    return code
}
