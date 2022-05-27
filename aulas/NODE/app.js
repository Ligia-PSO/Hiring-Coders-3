const http = require('http');//incluindo uma biblioteca que traz o servidor local 
const url = require('url');
const queryString = require('query-string');


// const favicon = require('serve-favicon');
// const imgBuffer = new Buffer.from('AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAA77+9AAAAAAAAAAAAAAAQAAAAAAAAAABz77+9AAAAAADvv73vv70AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARERERERERERERERERERERERERARARERERAREREREQEREREiIiIREREREiIiIiERERESIiIiIRERERIiIiIhEREQEiIiIiEBERESIiIRIRERERIiIREhEREREiIhEiERERARIiIiEQERERERERERERERERARAREREREREREREREe+/ve+/vQAA77+977+9AADvv73vv70AAO+/ve+/vQAA77+9HwAA77+9DwAA77+9DwAA77+9DwAA77+9CwAA77+9bwAA77+977+9AADvv73vv70AAO+/vRsAAO+/ve+/vQAA77+977+9AADvv73vv70AAA==', 'base64');
//define o endereço/URL
const hostname = '127.0.0.1';//ip do localhost
const port = 3000;

// app.use(favicon(imgBuffer))

//implementação da regra de negócio
const server = http.createServer((req, res) => {
    // Pegarapergunta na url
    // console.log(req.url);//gets the text typed on the url
    const params = queryString.parse(url.parse(req.url, true).search);//converte em um objeto e pega so a parte requerida
    console.log(params)

    // Verificaraperguntaeescolher uma resposta
    let resposta;
    if (params.pergunta == 'melhor-filme') {
        resposta='wiplash';
        
    }else if(params.pergunta=='melhor-tecnologia-backend'){
        resposta='nodejs';
    }
     else {
         resposta='nao sei :('
    }

    // Retornararesposta escolhida

    res.statusCode = 200;//informa que o codigo de certo
    res.setHeader('Content-Type', 'text/plain');
    res.write(`Server running at http: /${hostname}:${port}/ \n`);
    res.end(resposta);//print on the navigation screen
    
});

//faz a execução do codigo
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//localhost:3000/?pergunta=melhor-filme