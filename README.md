# Azure Get Environment Variables

The objective of this packet is to simplify the variable transfer from Azure DevOps to .env file, making it easier to run the application locally, without the need to copy and paste the variables manually.

## Requisitos

Make sure to attend to the following requirements before executing the command:

- Install Azure CLI [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-windows?tabs=azure-cli)
- Authenticate to [Azure CLI login](https://learn.microsoft.com/pt-br/cli/azure/)
- Run this command on your terminal:

```
az login --allow-no-subscriptions
```

- After first try, it will install azure-devops extension if not installed. After that, run the command above again and it will work

- Make sure to have access to the Azure DevOps libraries
- Install this packet globally

## Installation

To install this packet globally, run the following command on your terminal:

```
npm install -g azure-get-enviroment-variables
```

## Demonstration

After authenticating to Azure CLI, run the following command in your terminal:

```
npx azure-get-enviroment-variables 'project name' -- 'library name'
```

Make sure to replace 'project name' and 'library name' with the real project and library names.

## Authors

- [@dihenry06](https://github.com/Dihenry06)

## Contributors

- [@czndy](https://github.com/czndy)