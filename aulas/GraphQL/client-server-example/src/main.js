import { createServer } from 'http';
import { readFile } from 'fs';//fs->file system usado para carregar o arquivo dentro do server
import { resolve } from 'path';
import { parse } from 'querystring';//aju a ler as strings tipo query fornecidas pelo http
const server = createServer((request, response) => {
    switch (request.url) {
        case '/status': {
            response.writeHead(200, { 'Content-Type': 'application/json', });//inicializa o buffer de resposta dando o status
            response.write(JSON.stringify({
                status: 'Okay',
            }));
            response.end();//finaliza o buffer
            break;
        }
        case '/sign-in': {
            const path = resolve(__dirname, './pages/sign-in.html');//HTML where the input is coming from and is relative to the root folder
            //not the main.js file
            readFile(path, (error, file) => {
                if (error) {
                    response.writeHead(500, 'Cant process HTML file.')
                    response.end()
                    return;
                }
                response.writeHead(200);
                response.write(file);
                response.end();
            })
            break;
        }
        case '/Home': {
            const path = resolve(__dirname, './pages/home.html');//HTML where the input is coming from and is relative to the root folder
            //not the main.js file
            readFile(path, (error, file) => {
                if (error) {
                    response.writeHead(500, 'Cant process HTML file.')
                    response.end()
                    return;
                }
                response.writeHead(200);
                response.write(file);
                response.end();

            })
            break
        }
        case '/autenticate': {
            let data = '';
            request.on('data', (chunk) => {
                data += chunk;
            });
            request.on('end', () => {
                const params = parse(data)
                // console.log(parse(data));//data-> email=ligiapsoliveira%40gmail.com&password=a%5CsdDS   =>ENCONDADO COMO QUERY STRING
                //using parse to format query:[Object: null prototype] {email: 'ligiapsoliveira@gmail.com',password: 'senhateste'}
                response.writeHead(301, {//301->permite redirecionar o usuario para outra pagina
                    Location: '/home',
                });
                response.end();
            });
            break;
        }
        default: {
            response.writeHead(404, 'Service Not found');//inicializa o buffer de resposta dando o status
            response.end();//finaliza o buffer

        }
    }
});
//rpocess é uma variavel global do node onde env e um objeto com as variaveis do ambinte

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;//nomear o port do servidor
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';//SE O LADO ESQUERDO FOR fALSE/UNDEFINED NULL ETC RETORNA 
//O LADO DIREITO

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server is listening at http://${HOSTNAME}:${PORT}`)
})