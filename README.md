# azure-get-enviroment-variables

Pacote para pegar variaveis de ambientes dentro dos recursos do Azure DevOps -> pipelines -> library e escrever em arquivo .env localmente

## Autores

- [@dihenry06](https://github.com/Dihenry06)

## Demonstração

Após estar autenticado no Azure cli basta criar em seu
package.json na seção de scripts o comando que deseja executar para pegar as variaveis de ambiente ou executar o comando diretamente no terminal.

"node ./node_modules/azure-get-enviroment-variables/index.js 'nome do projeto' 'nome da library'
