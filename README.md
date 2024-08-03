# Petshop Finder

Este projeto é uma aplicação web que ajuda a encontrar o melhor petshop para banhar cães, levando em consideração preços e distâncias dos petshops locais. A aplicação utiliza um backend com Node.js e Express e um frontend em React.

## Instruções para Executar o Sistema

### Pré-requisitos

* Node.js e npm instalados
* Git instalado

### Clonar o Repositório

```
git clone https://github.com/ThiagoPerdigao/petshopfinder.git
```

### Iniciar backend

```
cd backend
```

```
node index.js
```

### Iniciar frontend

```
cd frontend
```

```
npm start
```

O frontend será iniciado na porta 3000 por padrão. Acesse http://localhost:3000 no navegador para ver a aplicação em execução.

## Lista de Premissas Assumidas

* Os preços dos banhos são fixos para dias de semana e fim de semana, conforme especificado.
* São considerados apenas os três petshops mencionados, e não há necessidade de registrar outros petshops além desses.

## Decisões de Projeto

* Arquitetura Cliente-Servidor: Foi decidido utilizar uma arquitetura cliente-servidor para separar responsabilidades, facilitando a escalabilidade e manutenção do projeto.
* Backend em Node.js com Express: Foi utilizado o Node.js e Express para construir uma API simples e eficiente, aproveitando a familiaridade com JavaScript no frontend e backend.
* Frontend em React: Feito em React.
* Uso de Jest para Testes: Jest foi escolhido como framework de testes devido à sua simplicidade e integração com o ecossistema JavaScript.
* Aplicação simples: Devido à baixa complexidade, optou-se por não utilizar um banco de dados, já que o sistema não exige persistência de dados.

### Observações

* Como mencionado anteriormente, devido à simplicidade da aplicação, não há necessidade de utilizar um banco de dados. Os preços dos petshops, que são predefinidos, foram introduzidos como dados mock. No entanto, com o uso do Node.js, a adaptação e a escalabilidade do projeto podem ser facilmente implementadas, se necessário.

## Testes

Foram implementados testes unitários utilizando o framework Jest.

### Iniciar testes

```
cd backend
```

```
npm test
```

### Os testes

Os testes abrangem:

* Cálculo do petshop mais barato para um cão grande em dia de semana.
* Cálculo do petshop mais barato para um cão pequeno no fim de semana.
* Consideração da distância em caso de empate no custo.
