

module.exports.index = function(app,req,res){

    app.app.models.home.listarTarefas(req,res, function(result){

            res.render('home',{tarefas: result})
    })
    
}

module.exports.deletarTarefas = function(app,req,res, id){

    app.app.models.home.deletarTarefas(id, function(){

        res.redirect('/')

    })
    
}
