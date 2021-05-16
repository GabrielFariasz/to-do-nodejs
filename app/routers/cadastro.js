module.exports = function(app){

    app.get('/frm', (req, res) => {

        res.render('frm_cad_noticia')

    })

    app.post('/cad_tarefas', (req, res) => {   
     
        var noticias = req.body
        
        app.app.controllers.cadastro.salvarTarefas(app, req, res, noticias)
        


    })

}