module.exports = function(app){

    app.get('/', (req,res) => {      

        var modelHome = require('../models/home')
        modelHome.listaTarefas(app, req, res)   

    })

    app.get('/deletar', (req, res) => {

        var modelHome = require('../models/home')
        var id = req.query.id
        console.log(id)
        modelHome.deletarTarefas(app, req, res, id)


    })
}