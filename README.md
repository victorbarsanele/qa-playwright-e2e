# qa-playwright-e2e

[![Playwright Tests](https://github.com/victorbarsanele/qa-playwright-e2e/actions/workflows/playwright.yml/badge.svg)](https://github.com/victorbarsanele/qa-playwright-e2e/actions/workflows/playwright.yml)

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

End-to-end test suite for [SauceDemo](https://www.saucedemo.com/) built with **Playwright** and **TypeScript**, following the **Page Object Model** pattern. Tests run across Chromium, Firefox and WebKit in parallel.

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
├── fixtures/
│   └── user.json              # Shared test credentials
├── pages/
│   ├── login.page.ts          # Login page object
│   └── inventory.page.ts      # Inventory page object
├── tests/
│   ├── login.spec.ts          # Login test suite
│   └── inventory.spec.ts      # Inventory test suite
├── utils/
│   └── data-generator.ts      # Faker-based data helpers
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
| Reporter    | HTML                         |

Test credentials live in `fixtures/user.json`.

## CI/CD

The GitHub Actions workflow (`.github/workflows/playwright.yml`) triggers on every push and pull request to `main`/`master`. It installs dependencies, runs all tests across the three browsers, and uploads the HTML report as a build artifact (retained 30 days).

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

Suite de testes end-to-end para o [SauceDemo](https://www.saucedemo.com/), construída com **Playwright** e **TypeScript**, seguindo o padrão **Page Object Model**. Os testes são executados em paralelo nos navegadores Chromium, Firefox e WebKit.

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
├── fixtures/
│   └── user.json              # Credenciais de teste compartilhadas
├── pages/
│   ├── login.page.ts          # Page object da página de login
│   └── inventory.page.ts      # Page object da página de inventário
├── tests/
│   ├── login.spec.ts          # Suite de testes de login
│   └── inventory.spec.ts      # Suite de testes de inventário
├── utils/
│   └── data-generator.ts      # Helpers de dados com Faker
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
| Reporter     | HTML                          |

As credenciais de teste estão em `fixtures/user.json`.

## CI/CD

O workflow do GitHub Actions (`.github/workflows/playwright.yml`) é acionado a cada push e pull request para `main`/`master`. Ele instala as dependências, executa todos os testes nos três navegadores e faz upload do relatório HTML como artefato de build (retido por 30 dias).
