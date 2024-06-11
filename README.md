# Portal de Notícias - Desafio Técnico para Voluntariado na Tech Pro Bem

🎉 Bem-vindo ao projeto desenvolvido para o desafio técnico da Tech Pro Bem! Este projeto consiste em um portal de notícias responsivo desenvolvido utilizando Next.js na versão 14, juntamente com os pacotes Shacd/UI, Tailwind CSS, Zod e Lucide React.

## Visão Geral
O portal de notícias permite aos usuários visualizarem as últimas notícias de diferentes fontes, com a possibilidade de alternar entre a News API e a GNews API. A interface é responsiva e amigável ao usuário, fornecendo uma experiência de leitura agradável em qualquer dispositivo.

## Tecnologias Utilizadas
- Next.js 14: O framework React utilizado para o desenvolvimento do projeto.
- Shacd/UI: Pacote de componentes UI para agilizar o desenvolvimento da interface.
- Tailwind CSS: Framework de CSS utilizado para estilizar os componentes e garantir um design moderno e responsivo.
- Zod: Biblioteca utilizada para validação de dados.
- Lucide React: Conjunto de ícones SVG para melhorar a experiência visual do usuário.

## Funcionalidades Implementadas
- 📰 Consumo de API de Notícias: O portal consome as APIs de notícias (News API e GNews API) para obter as últimas informações.
- 🔄 Seleção de Fonte de Notícias: Implementação de um seletor para alternar entre as fontes de notícias disponíveis.
- 📝 Páginas de Detalhes: Redirecionamento para páginas de detalhes ao clicar em um card, exibindo o texto completo da notícia, data de publicação e autor.

## Próximos Passos
- 🛠️ Conclusão do Seletor de Fonte de Notícias: Finalizar a implementação do seletor para permitir uma alternância fácil entre a News API e a GNews API.
- 🎨 Melhorias na Interface: Aprimorar o design e a usabilidade do portal, garantindo uma experiência de usuário ainda mais agradável.
- 📄 Página de Detalhes: Implementação onde o usuário pode ver todos os detalhes da notícia.
- ✅ Testes Unitários e de Integração: Implementar testes para garantir a qualidade e robustez do código.
- 📖 Documentação: Elaborar uma documentação detalhada do projeto, incluindo instruções para execução local e contribuição.


## Como Executar o Projeto Localmente

##### Pré-requisitos
Você precisa ter o Node.js instalado na sua máquina. Caso não tenha, acesse https://nodejs.org/en para instalar.

 1. Clone o repositório:

```bash
git clone https:github.com/kaduh15/news-portal
```

2. Entre na pasta do projeto:
```bash
cd news-portal
```

3. Instale as dependências:
```bash
npm install
```

4. Obtenha sua chave de acesso da api:

  - Acesse https://gnews.io/ ou https://newsapi.org/.
  - Após criar sua conta, você receberá sua chave de acesso.
  - Renomeie o arquivo .env.example que está na raiz do projeto para .env e insira sua chave de acesso obtida.
    - Se criou uma conta na GNews, cole sua chave onde está indicado GNEWS_KEY.
    - Se criou uma conta na News API, cole sua chave onde está indicado NEWS_KEY.

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```
6. Acesse o projeto:
```
Abra o navegador e acesse http://localhost:3000.
```