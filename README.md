# 🛠️ IService - Plataforma de Serviços

Uma plataforma que conecta clientes a prestadores de serviços, facilitando o agendamento, pagamento e avaliação de serviços diversos.

## 📋 Sobre o Projeto

O IService é uma aplicação web que visa conectar pessoas que precisam de serviços com prestadores qualificados. A plataforma oferece um ambiente seguro para agendamentos, pagamentos e avaliações.

### 🎯 Objetivo
Criar uma ponte entre clientes e prestadores de serviços, proporcionando:
- **Para Clientes**: Facilidade para encontrar e contratar serviços
- **Para Prestadores**: Oportunidade de divulgar seus serviços e gerenciar agenda
- **Para Todos**: Transações seguras e sistema de avaliações confiável

## 🚀 Funcionalidades Principais

### 👤 Gestão de Usuários
- Cadastro de clientes e prestadores
- Sistema de login seguro
- Recuperação de senha
- Edição de perfil

### 🔍 Busca e Contratação
- Busca de prestadores com filtros
- Visualização de perfis completos
- Sistema de agendamento
- Avaliações e comentários

### 💰 Pagamentos
- Pagamento via Pix (MVP)
- Retenção de valores até conclusão
- Sistema de comissões
- Repasse automático

### 🎛️ Painel Administrativo
- Gestão de usuários
- Controle de serviços
- Monitoramento de pagamentos

## 🛠️ Tecnologias

### Front-end
- HTML5, CSS3, JavaScript
- Interface responsiva

### Back-end
- Node.js
- Express.js (através do Connect)

### Dependências
- `connect` - Framework web
- `body-parser` - Parse de requisições
- `serve-static` - Servir arquivos estáticos

## 👥 Equipe

### Desenvolvimento
- **Matheus** - Front-end
- **Kellyson Raphael** - Back-end
- **Otávio Cândido** - Back-end

### Design UX/UI
- **Kadson Kauã** - Designer
- **Weslley** - Designer
- **Kauan** - Designer

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd Iservice
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor**
   ```bash
   node server.js
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:3000
   ```

## 📂 Estrutura do Projeto

```
Iservice/
├── app/                 # Aplicação front-end
│   ├── css/            # Estilos
│   ├── js/             # Scripts
│   └── index.html      # Página principal
├── docs/               # Documentação
│   ├── org.md         # Organização da equipe
│   └── RF.md          # Requisitos funcionais
├── server.js          # Servidor Node.js
└── package.json       # Configurações do projeto
```

## 📖 Documentação

- [Requisitos do Sistema](docs/RF.md) - Requisitos funcionais e não funcionais
- [Organização da Equipe](docs/org.md) - Estrutura e responsabilidades da equipe

## 🎯 Status do Projeto

🟡 **Em Desenvolvimento** - MVP em construção

### Próximos Passos
- [ ] Implementação da interface de usuário
- [ ] Desenvolvimento das APIs
- [ ] Integração com sistema de pagamentos
- [ ] Testes e validações
- [ ] Deploy e lançamento

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**IService** - Conectando pessoas através de serviços de qualidade! 🤝
