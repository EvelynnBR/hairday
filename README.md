# 💇‍♂️ Hair Day - Agendamento de Horários

`Hair Day` é uma aplicação web desenvolvida para facilitar o agendamento de horários em barbearias ou salões de beleza. A interface permite que o usuário crie, visualize e cancele atendimentos de forma simples e intuitiva.

## ✨ Funcionalidades Principais

- **Agendar Atendimento:** Permite selecionar uma data e um horário disponível, e informar o nome do cliente para criar um novo agendamento.
- **Visualizar Agendamentos do Dia:** Exibe uma lista com todos os horários agendados para o dia selecionado, organizados por período (Manhã, Tarde e Noite).
- **Cancelar Agendamento:** Oferece a opção de cancelar um atendimento com um clique, atualizando a lista de horários disponíveis.
- **Disponibilidade de Horários:** A lista de horários disponíveis é atualizada dinamicamente, mostrando quais horários já estão ocupados.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (ES6+ Modules)
- **Manipulação de Datas:** Day.js
- **Build Tool:** Webpack com Babel para transpilação.
- **API Mock:** JSON Server para simular uma API RESTful e persistir os dados localmente.

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-repositorio>
    cd hairday
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor da API:**
    Abra um terminal e execute o comando para iniciar o `json-server`. Ele ficará observando o arquivo `server.json` na porta `3333`.
    ```bash
    npm run server
    ```

4.  **Inicie a aplicação:**
    Em outro terminal, execute o comando para iniciar o servidor de desenvolvimento do Webpack.
    ```bash
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:3000`.

---

*Projeto desenvolvido por **Evelyn Bezerra Ramos***.
