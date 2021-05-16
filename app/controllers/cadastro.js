module.exports.salvarTarefas = function(app,req,res, noticias){

    app.app.models.cadastro.salvarTarefas(app, req, res, noticias, function(){

        res.redirect('/')

    })
    
}
