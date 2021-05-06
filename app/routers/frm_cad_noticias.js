module.exports = function(app){

    app.get('/frm', (req, res) => {

        res.render('frm_cad_noticia')

    })

    app.post('/cad_tarefas', (req, res) => {
        let connection = require('../../configs/DBConnetion')

        var modelHome = require('../models/home')
        var noticias = req.body
        console.log(noticias)
        modelHome.salvarTarefas(app, req, res, noticias)



    })

}