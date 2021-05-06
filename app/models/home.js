module.exports.listaTarefas = function(app, req, res){

    var connection = require('../../configs/DBConnetion')

    connection.query('select * from tarefas order by data_limite asc', (err,result)=>{
        if(err) console.log(err)        
        else {console.log(result) 
        res.render('home', {tarefas: result})}

    })


}


module.exports.deletarTarefas = function(app, req, res, id){
    
    var connection = require('../../configs/DBConnetion')       
        connection.query('delete from tarefas where id =' + id, () =>{
            res.redirect('/')
        })
      

}


module.exports.salvarTarefas = function(app, req, res, noticias){

    var connection = require('../../configs/DBConnetion')
    connection.query('insert into tarefas set ?', noticias, (err, result) =>{
        
            res.redirect('/')
        
       
    })

}