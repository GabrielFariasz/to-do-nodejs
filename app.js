const app = require('./configs/server')
const porta = 80


app.listen(porta, function(){

    console.log("Servidor ativo! Rodando na porta: ", porta)

})