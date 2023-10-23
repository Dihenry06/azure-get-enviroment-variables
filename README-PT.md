# Azure Get Environment Variables

O objetivo deste pacote é simplificar a transferência de variáveis de ambiente do Azure DevOps para o arquivo .env, permitindo uma execução mais suave da aplicação localmente, sem a necessidade de copiar e colar manualmente.

## Requisitos

Certifique-se de atender aos seguintes requisitos antes de executar o comando:

- Autenticação no [Azure CLI](https://learn.microsoft.com/pt-br/cli/azure/)
- Acesso às bibliotecas do Azure DevOps
- Instalação global do pacote na máquina

## Instalação global

Para instalar o pacote globalmente, execute o seguinte comando no seu terminal:

```
npm install -g azure-get-enviroment-variables
```

## Demonstração

Após autenticar-se no Azure CLI, execute o seguinte comando no terminal:

```
npx azure-get-enviroment-variables 'nome do projeto' -- 'nome da biblioteca'
```

Certifique-se de substituir 'nome do projeto' e 'nome da biblioteca' pelos nomes reais do seu projeto e da sua biblioteca.

## Autores

- [@dihenry06](https://github.com/Dihenry06)

## Contribuidores

- [@czndy](https://github.com/czndy)