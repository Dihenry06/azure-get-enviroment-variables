# Azure Get Environment Variables

O objetivo deste pacote é simplificar a transferência de variáveis de ambiente do Azure DevOps para o arquivo .env, permitindo uma execução mais suave da aplicação localmente, sem a necessidade de copiar e colar manualmente.

## Requisitos

Certifique-se de atender aos seguintes requisitos antes de executar o comando:

- Instale o Azure CLI [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-windows?tabs=azure-cli)
- Faça login no [Azure CLI login](https://learn.microsoft.com/pt-br/cli/azure/)
- Execute esse comando no seu terminal:

```
az login --allow-no-subscriptions
```

- Depois da primeira tentativa, ele irá instalar a extensão do azure-devops se já não estiver instalada. Depois disso, execute novamente o comando acima, que irá funcionar.
- Azure CLI pode te pedir para informar sua organização. Para fazer isso, execute o comando abaixo e não se esqueça de mudar o '/minha-org/' para o nome da sua organização.

```
az devops configure --defaults organization=https://dev.azure.com/minha-org/
```

- Certifique-se de ter acesso às bibliotecas do Azure DevOps
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