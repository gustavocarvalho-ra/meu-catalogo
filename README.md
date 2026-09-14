# 🛍️ Catálogo Interativo Mobile

Aplicativo mobile desenvolvido em **React Native + Expo** que apresenta um catálogo de produtos de uma loja online, organizados por categorias (masculino e feminino), com navegação entre telas, consumo de API REST real e autenticação simulada.

Projeto desenvolvido como parte da disciplina de **Mobile Development**.

---

## 🚀 Funcionalidades

- ✅ **Tela de Login** com validação de campos (usuário/senha obrigatórios).
- ✅ **Autenticação simulada** com armazenamento dos dados do usuário via Redux Toolkit.
- ✅ **Listagem de produtos por categoria** com navegação por abas:
  - 👔 Masculino: `mens-shirts`, `mens-shoes`, `mens-watches`
  - 👗 Feminino: `womens-bags`, `womens-dresses`, `womens-jewellery`, `womens-shoes`, `womens-watches`
- ✅ **Consumo de API REST real** via Axios (DummyJSON).
- ✅ **Tela de Detalhes** com imagem, título, descrição, preço original e preço com desconto.
- ✅ **Logout funcional** com confirmação via alerta, limpando o estado global.
- ✅ **Tratamento de loading e erros** em todas as requisições.
- ✅ **Navegação tipada** com TypeScript (Stack + Bottom Tabs).
- ✅ **Estrutura profissional** de pastas (`screens`, `components`, `services`, `store`, `navigation`, `types`).
---

## 🧰 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **React Native** | Framework para desenvolvimento mobile multiplataforma |
| **Expo** | Plataforma que simplifica o desenvolvimento com React Native |
| **TypeScript** | Tipagem estática para maior segurança e produtividade |
| **React Navigation** | Navegação entre telas (Stack + Bottom Tabs) |
| **Axios** | Cliente HTTP para consumo da API REST |
| **Redux Toolkit** | Gerenciamento de estado global (authSlice) |
| **React Redux** | Integração do Redux com React |
| **DummyJSON** | API REST pública utilizada para os produtos |

---

## ⚙️ Como Executar o Projeto

### 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão **20 LTS** ou superior)
- [Git](https://git-scm.com/)
- [Expo Go](https://expo.dev/client) instalado no celular (Android/iOS) **ou** um emulador configurado (Android Studio / Xcode)

### 🔧 Passo a passo

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/meu-catalogo.git
cd meu-catalogo
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o servidor do Expo:**

```bash
npx expo start
```

4. **Abra o app:**

- Escaneie o QR Code exibido no terminal com o app Expo Go no celular; ou
- Pressione (a) para abrir no emulador Android; ou
- Pressione (i) para abrir no simulador iOS.

## 🔑 Credenciais de Acesso
Como o login é simulado (não há backend de autenticação real), utilize as credenciais abaixo:

- | Campo -	Valor |
- | Username -	admin |
- | Senha -	1234 |

### 💡 Para alterar o comportamento do login, edite a função handleLogin em (src/screens/Login.tsx).

## 🌐 API Utilizada
Este projeto consome a API pública DummyJSON.

### Endpoints utilizados

GET /products/category/{categoria}	->     Lista produtos por categoria

GET /products/{id} ->                     	Retorna detalhes de um produto específico


## Exemplos de requisição

```http
GET https://dummyjson.com/products/category/mens-shirts
GET https://dummyjson.com/products/1
```

## 📸 Prints das Telas

Login — validação de campos e simulação de autenticação

<img width="200" height="350" alt="image" src="https://github.com/user-attachments/assets/4b376d9c-41bb-4114-90d4-121d1aa18c34" />


Lista de Produtos — abas Masculino/Feminino com dados da API

<img width="200" height="350" alt="image" src="https://github.com/user-attachments/assets/e9791164-39a5-4fd5-847b-d5770e3afcdd" /> <img width="200" height="350" alt="image" src="https://github.com/user-attachments/assets/ab067f8a-05b5-462f-a92e-18e2839a3171" />


Detalhes do Produto — imagem, descrição, preço e desconto

<img width="200" height="350" alt="image" src="https://github.com/user-attachments/assets/1b8723e1-82de-42d2-96ad-8d6e88cfc7d7" />



Configurações — dados do usuário e logout

<img width="200" height="350" alt="image" src="https://github.com/user-attachments/assets/bca5f7d5-d1aa-4f1b-a3a6-11b769720405" /> <img width="200" height="350" alt="image" src="https://github.com/user-attachments/assets/5daf12d1-fe1b-4170-8572-ec7dadac0c89" />


## 🎥 Vídeo Pitch
Assista à apresentação do projeto no vídeo abaixo:

### https://www.youtube.com/watch?v=I397mnBmbIU


## 📄 Documentação Adicional

[textoReflexivo.pdf](https://github.com/user-attachments/files/32208910/textoReflexivo.pdf)
📘 Relatório Teórico (PDF)

[printDasTelas.pdf](https://github.com/user-attachments/files/32208907/printDasTelas.pdf)
🖼️ PDF com Prints das Telas


## 📝 Licença
Este projeto foi desenvolvido para fins acadêmicos como parte da disciplina de Mobile Development. Sinta-se à vontade para estudar e se inspirar no código.

## 🙏 Agradecimentos
- Expo pela plataforma incrível
- DummyJSON pela API pública de teste
- React Navigation pela documentação clara
