# Funcionalidades

## Conexoes

- Rota para listar o total de conexões realizadas
- Rota para criar uma nova conexao


## Aula
- Rota para criar uma aula
- Rota Listar aulas
    - Filtrar por matérias, dias da semana e horário

## Problemas enfrentados:

1- A extensão SQLITE do VSCODE não funcionava

    - Descrição do problema: Quando tentava abrir o arquivo de database a mensagem `Unable to find a valid SQLite command. Fallback binary is not valid` era exibida
    - Solução:
        - No Ubuntu 20: basta rodar o comando no terminal: `sudo apt install sqlite3`