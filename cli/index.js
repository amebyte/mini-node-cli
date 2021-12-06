const Koa = require("koa")
    
    
    const serve = require("koa-static")
    

    const views = require("koa-views")



    const koaBody = require("koa-body")


    const app = new Koa()

    
    app.use(serve(__dirname+"/static"))
    


    app.use(views(__dirname+"/views",{
        extension: "pug"
    }))



    app.use(koaBody({
        multipart:true
    }))


    

    app.listen(8080,()=>{
        console.log("open server localhost:8080")
    })