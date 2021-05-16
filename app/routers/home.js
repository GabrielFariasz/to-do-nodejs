
module.exports = function(app){

    app.get('/', (req,res) => {      

        app.app.controllers.home.index(app,req,res)   

    })

    app.get('/deletar', (req, res) => {

        
        var id = req.query.id       
        app.app.controllers.home.deletarTarefas(app, req, res, id)


    })
}