![Cover](https://github.com/kumanaya/gitpug/blob/main/assets/banner.png)

| ![Imagem 1](https://github.com/kumanaya/gitpug/blob/main/assets/Signin.png) | ![Imagem 2](https://github.com/kumanaya/gitpug/blob/main/assets/Signup.png) | ![Imagem 3](https://github.com/kumanaya/gitpug/blob/main/assets/Home.png) | ![Imagem 4](https://github.com/kumanaya/gitpug/blob/main/assets/History.png) | ![Imagem 5](https://github.com/kumanaya/gitpug/blob/main/assets/About.png) |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------- |

<!-- Descrição do Projeto -->

<p  align="center">GitPug é um projeto full stack desenvolvido com Nest.js e React. Proporciona uma experiência de login seguro, utiliza JWT para autenticação e explora a API do GitHub para consultar perfis e repositórios. Uma maneira fácil e eficaz de interagir com informações do GitHub.</p>

<!-- Badges -->

<div  align="center">

<img  src="https://img.shields.io/github/license/kumanaya/gitpug"  alt="Licença">

<img  src="https://img.shields.io/github/v/release/kumanaya/gitpug"  alt="Versão">

<img  src="https://img.shields.io/github/issues/kumanaya/gitpug"  alt="Issues">

<img  src="https://img.shields.io/github/forks/kumanaya/gitpug"  alt="Forks">

<img  src="https://img.shields.io/github/stars/kumanaya/gitpug"  alt="Stars">

</div>

<!-- Índice -->

## Índice

- [Funcionalidades](#funcionalidades)

- [Tecnologias e Bibliotecas Principais](#tecnologias-e-bibliotecas-principais)

- [Pré-requisitos](#pré-requisitos)

- [Instalação](#instalação)

- [Como Configurar](#como-configurar)

- [Como Executar](#como-executar)

- [Documentação das Rotas](#documentacao-das-rotas)

- [Testes](#testes)

- [Contribuindo](#contribuindo)

- [Licença](#licença)

<!-- Funcionalidades -->

## Funcionalidades

### Autenticação e Perfil

- Realize login de forma segura.

- Utilize JWT para autenticação.

- Consulte o perfil do GitHub do usuário.

<!-- Tecnologias e Bibliotecas Principais -->

## Tecnologias e Bibliotecas Principais

Aqui estão algumas das principais tecnologias e bibliotecas utilizadas no projeto:

- **Nest.js**: Um framework para construir aplicativos Node.js eficientes e escaláveis.

- **React**: Uma biblioteca JavaScript para construir interfaces de usuário.

- **TypeORM**: Um ORM (Object-Relational Mapping) para TypeScript e JavaScript.

- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.

- **JWT**: JSON Web Tokens para autenticação segura.

- **GitHub API**: Integração com a API do GitHub para consulta de informações.

<!-- Pré-requisitos -->

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte software instalado em seu sistema:

- **Node.js:** Certifique-se de ter o Node.js instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

- **Git:** Você também precisará do Git instalado em seu sistema para clonar o repositório. Você pode baixá-lo em [git-scm.com](https://git-scm.com/).

- **Docker:** Instale o Docker em seu sistema. Instruções de instalação podem ser encontradas em [Docker Installation Guide](https://docs.docker.com/get-docker/).

<!-- Instalação -->

## Instalação

1.  **Clone o repositório:**

```bash

git clone  https://github.com/kumanaya/gitpug.git

```

2.  **Acesse a pasta do projeto:**

```bash

cd  gitpug

```

3.  **Suba um instância Docker**

```bash

docker run --name postgres -e POSTGRES_USER=SEU_USER_AQUI -e POSTGRES_PASSWORD=SUA_SENHA_AQUI -p 5432:5432 -d postgres
```

4 **Instale as dependências:**

```bash

pnpm install

```

<!-- Como Configurar -->

## Como Configurar

Para configurar o projeto, crie um arquivo `.env` na pasta `app/server` com as seguintes variáveis de ambiente:

```plaintext
PORT=8080
JWT_SECRET_KEY=  # chave secreta do JWT

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=  # usuário do banco
DATABASE_PASSWORD=  # senha do banco
DATBASE_SYNC=true
```

Além disso, configure as informações do banco de dados no arquivo `app/server/ormconfig.json`.

<!-- Como Executar -->

## Como Executar

1.  **Inicie o servidor Nest.js:**

```bash

cd  apps/server && npm run start:dev

```

2.  **Inicie o aplicativo React:**

```bash

cd  apps/web && npm start

```

Isso iniciará o servidor Nest.js e o aplicativo React. Você poderá acessar o aplicativo em http://localhost:8080/.

<!-- Documentação das Rotas -->

## Documentação das Rotas

A documentação das rotas está disponível em `/docs`. Para acessar a documentação completa das APIs e endpoints, visite:

- [Documentação das Rotas do Servidor Nest.js](http://localhost:8080/docs)

<!-- Contribuindo -->

## Contribuindo

Você é bem-vindo(a) para contribuir com este projeto. Sinta-se à vontade para abrir problemas (issues) e enviar pull requests.

<!-- Licença -->

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
