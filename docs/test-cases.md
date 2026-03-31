# Test Cases

## Index / Índice

- [English](#english)
- [Português](#portugues)

---

## English

### Approach

Test cases were defined based on:

- Critical application flows (happy path)
- Basic negative scenarios
- Expected end-user behavior

---

### Login

#### CT-L01 - Login with valid credentials

| Field               | Description                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| **Precondition**    | User has valid credentials registered in `fixtures/user.json`                           |
| **Steps**           | 1. Navigate to the login page<br>2. Enter valid username and password<br>3. Click Login |
| **Expected result** | User is successfully redirected to the inventory page                                   |

#### CT-L02 - Login with invalid credentials

| Field               | Description                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Precondition**    | No active session                                                                                             |
| **Steps**           | 1. Navigate to the login page<br>2. Enter user `invalid_user` and password `wrong_password`<br>3. Click Login |
| **Expected result** | Error message is displayed and the user remains on the login page                                             |

---

### Inventory

#### CT-I01 - Display inventory items

| Field               | Description                                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Precondition**    | User authenticated with valid credentials                                                                                        |
| **Steps**           | 1. Verify the inventory page is loaded<br>2. Verify items are visible<br>3. Verify each item has valid data (name, price, image) |
| **Expected result** | Inventory items are displayed with valid data                                                                                    |

#### CT-I02 - Add one item to cart and update badge

| Field               | Description                                                           |
| ------------------- | --------------------------------------------------------------------- |
| **Precondition**    | User authenticated and on the inventory page                          |
| **Steps**           | 1. Click "Add to cart" on the first item<br>2. Check the cart counter |
| **Expected result** | Cart badge shows value `1`                                            |

#### CT-I03 - Add multiple items to cart and update badge

| Field               | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| **Precondition**    | User authenticated and on the inventory page                      |
| **Steps**           | 1. Add the first 3 items to the cart<br>2. Check the cart counter |
| **Expected result** | Cart badge shows value `3`                                        |

#### CT-I04 - Open cart and verify added items

| Field               | Description                                      |
| ------------------- | ------------------------------------------------ |
| **Precondition**    | User authenticated and on the inventory page     |
| **Steps**           | 1. Add 2 items to cart<br>2. Click the cart icon |
| **Expected result** | Cart page opens with the added items             |

---

### Checkout

#### CT-C01 - Complete purchase with valid data

| Field               | Description                                                                                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Precondition**    | Authenticated user, 1 item in cart, on checkout page (step 1)                                                                                                                         |
| **Steps**           | 1. Verify checkout information page is displayed<br>2. Fill first name, last name, and postal code with valid data<br>3. Click Continue<br>4. Verify overview page<br>5. Click Finish |
| **Expected result** | Purchase is completed successfully and confirmation page is displayed                                                                                                                 |

#### CT-C02 - Error when first name is missing

| Field               | Description                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------- |
| **Precondition**    | Authenticated user, 1 item in cart, on checkout page (step 1)                                |
| **Steps**           | 1. Leave First Name empty<br>2. Fill Last Name and Postal Code<br>3. Click Continue          |
| **Expected result** | Error message `Error: First Name is required` is displayed and user remains on checkout page |

#### CT-C03 - Error when last name is missing

| Field               | Description                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------- |
| **Precondition**    | Authenticated user, 1 item in cart, on checkout page (step 1)                               |
| **Steps**           | 1. Fill First Name and Postal Code<br>2. Leave Last Name empty<br>3. Click Continue         |
| **Expected result** | Error message `Error: Last Name is required` is displayed and user remains on checkout page |

#### CT-C04 - Error when postal code is missing

| Field               | Description                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------- |
| **Precondition**    | Authenticated user, 1 item in cart, on checkout page (step 1)                                 |
| **Steps**           | 1. Fill First Name and Last Name<br>2. Leave Postal Code empty<br>3. Click Continue           |
| **Expected result** | Error message `Error: Postal Code is required` is displayed and user remains on checkout page |

#### CT-C05 - Error when submitting completely empty form

| Field               | Description                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------- |
| **Precondition**    | Authenticated user, 1 item in cart, on checkout page (step 1)                                |
| **Steps**           | 1. Leave all fields empty<br>2. Click Continue                                               |
| **Expected result** | Error message `Error: First Name is required` is displayed and user remains on checkout page |

#### CT-C06 - Cancel checkout and return to inventory

| Field               | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| **Precondition**    | Authenticated user, 1 item in cart, on checkout page (step 1) |
| **Steps**           | 1. Click Cancel on checkout information page                  |
| **Expected result** | User is redirected back to the inventory page                 |

---

### Cart

#### CT-CA01 - Show added item in cart

| Field               | Description                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------ |
| **Precondition**    | Authenticated user, 1 item added to cart, on cart page                                                 |
| **Steps**           | 1. Verify cart items are visible<br>2. Verify there is exactly 1 item<br>3. Verify item has valid data |
| **Expected result** | Cart displays 1 item with valid data (name, price, quantity)                                           |

#### CT-CA02 - Remove item from cart

| Field               | Description                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| **Precondition**    | Authenticated user, 1 item in cart, on cart page                            |
| **Steps**           | 1. Click Remove on the item<br>2. Verify item count<br>3. Verify cart badge |
| **Expected result** | Cart becomes empty and cart badge is hidden                                 |

#### CT-CA03 - Continue shopping and return to inventory

| Field               | Description                                      |
| ------------------- | ------------------------------------------------ |
| **Precondition**    | Authenticated user, 1 item in cart, on cart page |
| **Steps**           | 1. Click Continue Shopping                       |
| **Expected result** | User is redirected to the inventory page         |

---

## Português

### Abordagem

Os casos de teste foram definidos com base em:

- Fluxos críticos da aplicação (happy path)
- Cenários negativos básicos
- Comportamento esperado do usuário final

---

### Login

#### CT-L01 - Login com credenciais válidas

| Campo                  | Descrição                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| **Pré-condição**       | Usuário possui credenciais válidas cadastradas em `fixtures/user.json`                         |
| **Passos**             | 1. Navegar para a página de login<br>2. Informar usuário e senha válidos<br>3. Clicar em Login |
| **Resultado esperado** | Usuário é redirecionado para a página de inventário com sucesso                                |

#### CT-L02 - Login com credenciais inválidas

| Campo                  | Descrição                                                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Pré-condição**       | Nenhuma sessão ativa                                                                                                   |
| **Passos**             | 1. Navegar para a página de login<br>2. Informar usuário `invalid_user` e senha `wrong_password`<br>3. Clicar em Login |
| **Resultado esperado** | Mensagem de erro é exibida e o usuário permanece na página de login                                                    |

---

### Inventory

#### CT-I01 - Exibição dos itens do inventário

| Campo                  | Descrição                                                                                                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pré-condição**       | Usuário autenticado com credenciais válidas                                                                                                                                 |
| **Passos**             | 1. Verificar que a página de inventário está carregada<br>2. Verificar que os itens estão visíveis<br>3. Verificar que cada item contém dados válidos (nome, preço, imagem) |
| **Resultado esperado** | Itens do inventário são exibidos com dados válidos                                                                                                                          |

#### CT-I02 - Adicionar um item ao carrinho e atualizar badge

| Campo                  | Descrição                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------- |
| **Pré-condição**       | Usuário autenticado e na página de inventário                                      |
| **Passos**             | 1. Clicar em "Add to cart" no primeiro item<br>2. Verificar o contador do carrinho |
| **Resultado esperado** | Badge do carrinho exibe o valor `1`                                                |

#### CT-I03 - Adicionar múltiplos itens ao carrinho e atualizar badge

| Campo                  | Descrição                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------ |
| **Pré-condição**       | Usuário autenticado e na página de inventário                                        |
| **Passos**             | 1. Adicionar os 3 primeiros itens ao carrinho<br>2. Verificar o contador do carrinho |
| **Resultado esperado** | Badge do carrinho exibe o valor `3`                                                  |

#### CT-I04 - Abrir carrinho e verificar itens adicionados

| Campo                  | Descrição                                                          |
| ---------------------- | ------------------------------------------------------------------ |
| **Pré-condição**       | Usuário autenticado e na página de inventário                      |
| **Passos**             | 1. Adicionar 2 itens ao carrinho<br>2. Clicar no ícone do carrinho |
| **Resultado esperado** | Página do carrinho é aberta com os itens adicionados               |

---

### Checkout

#### CT-C01 - Finalizar compra com dados válidos

| Campo                  | Descrição                                                                                                                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pré-condição**       | Usuário autenticado, 1 item no carrinho, na página de checkout (step 1)                                                                                                                                 |
| **Passos**             | 1. Verificar que está na página de informações de checkout<br>2. Preencher nome, sobrenome e CEP com dados válidos<br>3. Clicar em Continue<br>4. Verificar a página de overview<br>5. Clicar em Finish |
| **Resultado esperado** | Compra concluída com sucesso; página de confirmação é exibida                                                                                                                                           |

#### CT-C02 - Erro ao omitir o primeiro nome

| Campo                  | Descrição                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| **Pré-condição**       | Usuário autenticado, 1 item no carrinho, na página de checkout (step 1)                             |
| **Passos**             | 1. Deixar o campo First Name vazio<br>2. Preencher Last Name e Postal Code<br>3. Clicar em Continue |
| **Resultado esperado** | Mensagem de erro `Error: First Name is required` é exibida; usuário permanece na página de checkout |

#### CT-C03 - Erro ao omitir o sobrenome

| Campo                  | Descrição                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| **Pré-condição**       | Usuário autenticado, 1 item no carrinho, na página de checkout (step 1)                             |
| **Passos**             | 1. Preencher First Name e Postal Code<br>2. Deixar o campo Last Name vazio<br>3. Clicar em Continue |
| **Resultado esperado** | Mensagem de erro `Error: Last Name is required` é exibida; usuário permanece na página de checkout  |

#### CT-C04 - Erro ao omitir o código postal

| Campo                  | Descrição                                                                                            |
| ---------------------- | ---------------------------------------------------------------------------------------------------- |
| **Pré-condição**       | Usuário autenticado, 1 item no carrinho, na página de checkout (step 1)                              |
| **Passos**             | 1. Preencher First Name e Last Name<br>2. Deixar o campo Postal Code vazio<br>3. Clicar em Continue  |
| **Resultado esperado** | Mensagem de erro `Error: Postal Code is required` é exibida; usuário permanece na página de checkout |

#### CT-C05 - Erro ao enviar formulário completamente vazio

| Campo                  | Descrição                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| **Pré-condição**       | Usuário autenticado, 1 item no carrinho, na página de checkout (step 1)                             |
| **Passos**             | 1. Deixar todos os campos vazios<br>2. Clicar em Continue                                           |
| **Resultado esperado** | Mensagem de erro `Error: First Name is required` é exibida; usuário permanece na página de checkout |

#### CT-C06 - Cancelar checkout e retornar ao inventário

| Campo                  | Descrição                                                               |
| ---------------------- | ----------------------------------------------------------------------- |
| **Pré-condição**       | Usuário autenticado, 1 item no carrinho, na página de checkout (step 1) |
| **Passos**             | 1. Clicar em Cancel na página de informações de checkout                |
| **Resultado esperado** | Usuário é redirecionado de volta para a página de inventário            |

---

### Cart

#### CT-CA01 - Exibir item adicionado no carrinho

| Campo                  | Descrição                                                                                                                                     |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pré-condição**       | Usuário autenticado, 1 item adicionado ao carrinho, na página do carrinho                                                                     |
| **Passos**             | 1. Verificar que os itens do carrinho estão visíveis<br>2. Verificar que há exatamente 1 item<br>3. Verificar que o item contém dados válidos |
| **Resultado esperado** | Carrinho exibe 1 item com dados válidos (nome, preço, quantidade)                                                                             |

#### CT-CA02 - Remover item do carrinho

| Campo                  | Descrição                                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------- |
| **Pré-condição**       | Usuário autenticado, 1 item no carrinho, na página do carrinho                                        |
| **Passos**             | 1. Clicar em Remove no item<br>2. Verificar a quantidade de itens<br>3. Verificar o badge do carrinho |
| **Resultado esperado** | Carrinho fica vazio e o badge do carrinho é ocultado                                                  |

#### CT-CA03 - Continuar comprando e retornar ao inventário

| Campo                  | Descrição                                                      |
| ---------------------- | -------------------------------------------------------------- |
| **Pré-condição**       | Usuário autenticado, 1 item no carrinho, na página do carrinho |
| **Passos**             | 1. Clicar em Continue Shopping                                 |
| **Resultado esperado** | Usuário é redirecionado para a página de inventário            |
