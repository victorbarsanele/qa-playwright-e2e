# qa-playwright-e2e

[![Playwright Tests](https://github.com/victorbarsanele/qa-playwright-e2e/actions/workflows/playwright.yml/badge.svg)](https://github.com/victorbarsanele/qa-playwright-e2e/actions/workflows/playwright.yml)
![Status](https://img.shields.io/badge/status-maintained-brightgreen)

---

## 🌐 Language / Idioma

- [English](#english)
- [Português](#português)

---

# English

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [CI/CD](#cicd)

## Overview

End-to-end test suite for [SauceDemo](https://www.saucedemo.com/) built with **Playwright** and **TypeScript**, following the **Page Object Model** pattern. Tests run across Chromium, Firefox and WebKit in parallel, and page objects encapsulate selectors so spec files stay focused on user flows.

## Tech Stack

| Tool                                  | Version           |
| ------------------------------------- | ----------------- |
| [Playwright](https://playwright.dev/) | ^1.58.2           |
| TypeScript                            | via `@types/node` |
| [Faker.js](https://fakerjs.dev/)      | ^10.3.0           |
| Node.js                               | LTS               |

## Project Structure

```
qa-playwright-e2e/
├── .github/
│   └── workflows/
│       └── playwright.yml     # CI pipeline
├── docs/
│   ├── bugs-found.md          # Findings and observed issues
│   ├── test-cases.md          # Functional test case catalog
│   └── test-strategy.md       # E2E scope, approach, and risks
├── fixtures/
│   └── user.json              # Shared test credentials
├── pages/
│   ├── cart.page.ts           # Cart page object
│   ├── inventory.page.ts      # Inventory page object
│   ├── checkout.page.ts       # Checkout page object
│   └── login.page.ts          # Login page object
├── playwright-report/         # Generated HTML report output
├── test-results/              # Generated Playwright artifacts
├── tests/
│   ├── api/                   # API test area
│   ├── e2e/
│   │   ├── cart.spec.ts       # Cart test suite
│   │   ├── checkout.spec.ts   # Checkout test suite
│   │   ├── inventory.spec.ts  # Inventory test suite
│   │   └── login.spec.ts      # Login test suite
│   └── smoke/                 # Smoke test area
├── utils/
│   └── data-generator.ts      # Faker-based data helpers
├── package-lock.json
├── playwright.config.ts       # Playwright configuration
└── package.json
```

## Prerequisites

- [Node.js LTS](https://nodejs.org/)
- npm ≥ 9

## Installation

```bash
# Clone the repository
git clone https://github.com/victorbarsanele/qa-playwright-e2e.git
cd qa-playwright-e2e

# Install Node dependencies
npm ci

# Install Playwright browsers
npx playwright install --with-deps
```

## Running Tests

```bash
# Run all tests (all browsers)
npx playwright test

# Run a specific spec file
npx playwright test tests/login.spec.ts

# Run a single test by title
npx playwright test tests/checkout.spec.ts -g "should fill checkout information and complete purchase"

# Run on a single browser
npx playwright test --project=chromium

# Run in headed mode (visible browser)
npx playwright test --headed

# Open the HTML report after a run
npx playwright show-report
```

## Configuration

Key settings in `playwright.config.ts`:

| Setting     | Value                        |
| ----------- | ---------------------------- |
| Browsers    | Chromium, Firefox, WebKit    |
| Parallelism | Full (local) / 1 worker (CI) |
| Retries     | 0 (local) / 2 (CI)           |
| Trace       | `on-first-retry`             |
| Test ID     | `data-test`                  |
| Reporter    | HTML                         |

Test credentials live in `fixtures/user.json`.
Page objects use `getByTestId(...)` where SauceDemo exposes `data-test` attributes, and fall back to structural selectors only when there is no stable test id.

## CI/CD

The GitHub Actions workflow (`.github/workflows/playwright.yml`) triggers on every push and pull request to `main`/`master`. It installs dependencies, runs all tests across the three browsers, and uploads the HTML report as a build artifact (retained 30 days).

## 🔍 Quality Analysis

During test automation, no evident functional bugs were identified in the application.

However, some points of attention were observed:

- Dependency on fixed data (default users)
- Absence of more robust validations in negative scenarios
- Possible fragility in selectors not based on data-test

## 📄 Additional Documentation

- Test strategy: /docs/test-strategy.md
- Test cases: /docs/test-cases.md
- Bugs found: /docs/bugs-found.md

---

# Português

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando os Testes](#executando-os-testes)
- [Configuração](#configuração)
- [CI/CD](#cicd-1)

## Visão Geral

Suite de testes end-to-end para o [SauceDemo](https://www.saucedemo.com/), construída com **Playwright** e **TypeScript**, seguindo o padrão **Page Object Model**. Os testes são executados em paralelo nos navegadores Chromium, Firefox e WebKit, e os page objects encapsulam os seletores para manter as specs focadas no fluxo do usuário.

## Tecnologias

| Ferramenta                            | Versão            |
| ------------------------------------- | ----------------- |
| [Playwright](https://playwright.dev/) | ^1.58.2           |
| TypeScript                            | via `@types/node` |
| [Faker.js](https://fakerjs.dev/)      | ^10.3.0           |
| Node.js                               | LTS               |

## Estrutura do Projeto

```
qa-playwright-e2e/
├── .github/
│   └── workflows/
│       └── playwright.yml     # Pipeline de CI
├── docs/
│   ├── bugs-found.md          # Achados e pontos de atenção
│   ├── test-cases.md          # Catálogo de casos de teste
│   └── test-strategy.md       # Escopo, abordagem e riscos E2E
├── fixtures/
│   └── user.json              # Credenciais de teste compartilhadas
├── pages/
│   ├── cart.page.ts           # Page object da página do carrinho
│   ├── inventory.page.ts      # Page object da página de inventário
│   ├── checkout.page.ts       # Page object da página de checkout
│   └── login.page.ts          # Page object da página de login
├── playwright-report/         # Saída gerada do relatório HTML
├── test-results/              # Artefatos gerados pelo Playwright
├── tests/
│   ├── api/                   # Área de testes de API
│   ├── e2e/
│   │   ├── cart.spec.ts       # Suite de testes do carrinho
│   │   ├── checkout.spec.ts   # Suite de testes de checkout
│   │   ├── inventory.spec.ts  # Suite de testes de inventário
│   │   └── login.spec.ts      # Suite de testes de login
│   └── smoke/                 # Área de testes smoke
├── utils/
│   └── data-generator.ts      # Helpers de dados com Faker
├── package-lock.json
├── playwright.config.ts       # Configuração do Playwright
└── package.json
```

## Pré-requisitos

- [Node.js LTS](https://nodejs.org/)
- npm ≥ 9

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/victorbarsanele/qa-playwright-e2e.git
cd qa-playwright-e2e

# Instalar as dependências
npm ci

# Instalar os navegadores do Playwright
npx playwright install --with-deps
```

## Executando os Testes

```bash
# Executar todos os testes (todos os navegadores)
npx playwright test

# Executar um arquivo específico
npx playwright test tests/login.spec.ts

# Executar um único teste pelo título
npx playwright test tests/checkout.spec.ts -g "should fill checkout information and complete purchase"

# Executar em um único navegador
npx playwright test --project=chromium

# Executar com o navegador visível
npx playwright test --headed

# Abrir o relatório HTML após a execução
npx playwright show-report
```

## Configuração

Principais configurações em `playwright.config.ts`:

| Configuração | Valor                         |
| ------------ | ----------------------------- |
| Navegadores  | Chromium, Firefox, WebKit     |
| Paralelismo  | Total (local) / 1 worker (CI) |
| Tentativas   | 0 (local) / 2 (CI)            |
| Trace        | `on-first-retry`              |
| Test ID      | `data-test`                   |
| Reporter     | HTML                          |

As credenciais de teste estão em `fixtures/user.json`.
Os page objects usam `getByTestId(...)` quando o SauceDemo expõe atributos `data-test`, e usam seletores estruturais apenas quando não há um test id estável.

## CI/CD

O workflow do GitHub Actions (`.github/workflows/playwright.yml`) é acionado a cada push e pull request para `main`/`master`. Ele instala as dependências, executa todos os testes nos três navegadores e faz upload do relatório HTML como artefato de build (retido por 30 dias).

## 🔍 Análise de Qualidade

Durante a automação dos testes, não foram identificados bugs funcionais evidentes na aplicação.

No entanto, alguns pontos de atenção foram observados:

- Dependência de dados fixos (usuários padrão)
- Ausência de validações mais robustas em cenários negativos
- Possível fragilidade em seletores não baseados em data-test

## 📄 Documentação adicional

- Estratégia de testes: /docs/test-strategy.md
- Casos de teste: /docs/test-cases.md
- Bugs encontrados: /docs/bugs-found.md
