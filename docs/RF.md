# Requisitos do Sistema - IService

## Requisitos Funcionais (RF)

### Gestão de Usuários
- **RF01** - Cadastro de clientes e prestadores de serviços
- **RF02** - Login através de e-mail e senha
- **RF03** - Recuperação de senha por e-mail
- **RF04** - Edição de perfil (cliente e prestador)

### Gestão de Serviços
- **RF05** - Prestador pode definir serviços oferecidos
- **RF06** - Prestador pode definir preços dos serviços
- **RF07** - Prestador pode definir horários disponíveis
- **RF08** - Busca de prestadores com filtros (preço, nota, localização)
- **RF09** - Visualização do perfil completo do prestador

### Agendamento e Gestão de Serviços
- **RF10** - Agendamento de serviços (data, hora, tipo)
- **RF11** - Prestador pode aceitar ou recusar serviços
- **RF12** - Sistema de avaliação do prestador (nota e comentário)

### Sistema de Pagamentos
- **RF13** - Pagamento via aplicativo (Pix/cartão)
  - *Inicialmente apenas Pix para MVP*
- **RF14** - Retenção do valor até conclusão do serviço
- **RF15** - Desconto de comissão (%) no repasse ao prestador

### Painel Administrativo
- **RF16** - Visualização de usuários cadastrados
- **RF17** - Gestão de serviços
- **RF18** - Controle de pagamentos

---

## Requisitos Não Funcionais (RNF)

### Interface e Usabilidade
- **RNF01** - Interface responsiva para diferentes dispositivos
- **RNF02** - Design moderno e intuitivo

### Segurança
- **RNF03** - Senhas criptografadas
- **RNF04** - Pagamentos seguros (conformidade PCI-DSS)
- **RNF05** - Proteção de dados sensíveis dos usuários

### Qualidade e Manutenção
- **RNF06** - Código modular e bem documentado
- **RNF07** - Sistema de logs para erros e eventos importantes
- **RNF08** - Integração com provedores de pagamento (SaaS)