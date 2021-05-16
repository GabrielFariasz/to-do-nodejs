const connection = require('../../configs/DBConnection')

module.exports.listarTarefas = function(req,res, callback){
   connection.query('select * from tarefas order by data_limite asc',(err,result)=>{
    if(err) {
        console.log(err)         
    }
    
    return callback(result)})
}   

module.exports.deletarTarefas = function(id, callback){
       
        connection.query('delete from tarefas where id =' + id, (err, result) =>{
            return callback()
        })
}




