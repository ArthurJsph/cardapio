# 🍽️ Cardápio Virtual

Bem-vindo ao **Cardápio Virtual**! 🚀 Este projeto é uma aplicação moderna que permite aos restaurantes apresentar seus pratos e preços de forma digital. Os usuários podem navegar pelo cardápio, visualizar detalhes dos pratos e explorar o menu completo, proporcionando uma experiência prática e eficiente. 💻✨

---

## 🌟 Funcionalidades Principais

✅ **Cardápio Dinâmico**: Todos os pratos são carregados automaticamente do banco de dados, garantindo que o cardápio esteja sempre atualizado.  
🔍 **Detalhes dos Pratos**: Visualize informações detalhadas sobre cada prato, como descrição, preço e ingredientes.  
🚨 **Tratamento de Erros**: Caso o servidor backend seja desligado ou ocorra uma falha na conexão, uma mensagem de erro será exibida para o usuário.  

> **Nota**: Este sistema é focado exclusivamente na exibição do cardápio. Não inclui funcionalidades como agendamento, criação de reservas ou pedidos online.  

---

## 🛠️ Tecnologias Utilizadas

- **Backend**: Java (Spring Boot)  
  - Responsável por gerenciar as operações do sistema, incluindo a comunicação com o banco de dados e o fornecimento de dados para o frontend.  
- **Frontend**: React  
  - Interface moderna e responsiva para uma ótima experiência do usuário.  
- **Banco de Dados**: PostgreSQL  
  - Armazena todas as informações sobre os pratos, como nome, descrição, preço e ingredientes.  

---

## 📋 Como Funciona?

### Carregamento Automático do Cardápio
O cardápio é gerado dinamicamente a partir dos dados armazenados no banco de dados. Isso significa que qualquer alteração nos pratos (como adicionar, remover ou atualizar um item) será refletida automaticamente no frontend sem necessidade de intervenção manual.

### Tratamento de Falhas no Backend
Se o servidor backend for desligado ou estiver inacessível, o frontend exibirá uma mensagem de erro amigável, informando ao usuário que o serviço está temporariamente indisponível. Essa funcionalidade garante uma experiência robusta e transparente.

---

## 🎯 Exemplo de Uso

1. **Acessando o Cardápio**  
   Ao abrir a aplicação, o usuário verá uma lista de pratos disponíveis, carregada diretamente do banco de dados. Cada prato exibe seu nome, preço e uma breve descrição.

2. **Visualizando Detalhes**  
   Ao clicar em um prato, o usuário pode ver mais detalhes, como ingredientes e informações adicionais.

3. **Erro no Backend**  
   Se o backend estiver offline, o frontend exibirá uma mensagem como:  
   ```plaintext
   ⚠️ Ops! Parece que nosso servidor está temporariamente indisponível. Por favor, tente novamente mais tarde.
   ```

---

## 🚨 Testando o Tratamento de Erros

Para simular uma falha no backend:
1. Desligue o servidor backend (interrompa o processo Spring Boot).  
2. Tente acessar a aplicação no navegador.  
3. Uma mensagem de erro será exibida, informando que o serviço está indisponível.

---

## 📞 Contato

Para dúvidas, sugestões ou feedbacks, entre em contato:  
📧 E-mail: arthurjose.pn01@gmail.com  
🌐 LinkedIn: [linkedin](https://www.linkedin.com/in/arthur-js)  

---

