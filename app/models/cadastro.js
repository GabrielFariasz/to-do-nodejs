const connection = require('../../configs/DBConnection')

module.exports.salvarTarefas = function(app, req, res, noticias, callback){
    
    connection.query('insert into tarefas set ?', noticias, (err, result) =>{
        if(err) return 
            return callback()
    })

}