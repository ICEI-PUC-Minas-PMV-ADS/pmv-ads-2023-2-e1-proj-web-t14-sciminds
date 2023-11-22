Requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t14-sciminds/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md">Projeto de Sciminds</a>

Este documento descreve os testes funcionais a serem realizados na aplicação SciMinds, detalhando os passos, critérios de êxito e responsáveis por cada caso de teste.

## CT-01 - Verificar Funcionalidade dos Botões da Página Inicial

| Item | Descrição |
|:----|:-----------|
| Requisitos Associados | RF-07	A plataforma deve desenvolver uma ferramenta de busca robusta que permita aos usuários encontrar cursos, materiais e informações específicos com facilidade. |
| Objetivo do Teste | Verificar se os links da página inicial redirecionam corretamente. |
| Passos | 1. Acessar o navegador.<br>2. Informar o endereço do site.<br>3. Visualizar a página inicial.<br>4. Clicar nos links da página inicial, no menu navegação e cabeçalho. |
| Critérios de Êxito | Os links encaminham para as páginas ou âncoras de conteúdo corretas. |
| Responsável | [Nome do Responsável] |

## CT-02 - Criar Cadastro de Usuário

| Item | Descrição |
|:----|:-----------|
| Requisitos Associados | RF-01	A plataforma deve permitir que os usuários se inscrevam na plataforma com facilidade, fornecendo informações pessoais e criando um perfil. |
| Objetivo do Teste | Verificar a funcionalidade de cadastro de usuário esta sendo salvo. |
| Passos | 1. Acessar página inicial.<br>2. Clicar em 'Inscreva-se'.<br>3. Preencher e concluir o cadastro clicando em cadastrar. |
| Critérios de Êxito | O cadastro é salvo no Local Storage do navegador. |
| Responsável | [Nome do Responsável] |

## CT-03 - Verificar Login de Usuário

| Item | Descrição |
|:----|:-----------|
| Requisitos Associados | RF-01	A plataforma deve permitir que os usuários se inscrevam na plataforma com facilidade, fornecendo informações pessoais e criando um perfil. |
| Objetivo do Teste | Verificar se o cadastro salvo esta funcional.|
| Passos | 1. Acessar página inicial.<br>2. Clicar em 'Login' no canto superior direito no cabeçalho.<br>3. Informar dados de cadastro e realizar login. |
| Critérios de Êxito | Login realizado com sucesso, acessando a página de usuário. |
| Responsável | [Nome do Responsável] |

## CT-04 - Verificar Acesso aos Eventos Online

| Item | Descrição |
|:----|:-----------|
| Requisitos Associados | RF-03	A plataforma deve disponibilizar materiais de ensino, como vídeos, artigos, quizzes e exercícios, para cada curso.  |
| Objetivo do Teste | Verificar redirecionamento para eventos online. |
| Passos | 1. Acessar página inicial.<br>2. Clicar em eventos, no menu navegação ou descer no conteúdo da pagina. 3. Escolher o evento se sua preferência. |
| Critérios de Êxito | Redirecionamento correto para a matéria do evento selecionado. |
| Responsável | [Nome do Responsável] |

## CT-05 - Salvar Eventos como Favoritos

| Item | Descrição |
|:----|:-----------|
| Requisitos Associados | RF-05	A plataforma deve permitir que os usuários criem trilhas de aprendizado personalizadas com base em seus objetivos acadêmicos ou profissionais. |
| Objetivo do Teste | Verificar funcionalidade de salvar eventos como favoritos. |
| Passos | 1. Na página de usuário.<br> 2. Clicar no menu sanduiche canto superior esquerdo, ao lado da logo.<br> 3. Clicar na opção Eventos Salvos. |
| Critérios de Êxito | Eventos são salvos na área de 'Eventos Salvos' na página do usuário. |
| Responsável | [Nome do Responsável] |

## CT-06 - Avaliar Aulas 

| Item | Descrição |
|:----|:-----------|
| Requisitos Associados | RF-08	A plataforma deve permitir que os usuários avaliem os cursos e forneçam comentários para ajudar outros membros a fazer escolhas informadas. |
| Objetivo do Teste | Verificar funcionalidade de avaliar as aulas salvas. |
| Passos | 1. Na página de usuário.<br> 2. Clicar no menu sanduiche canto superior esquerdo, ao lado da logo.<br> 3. Clicar na opção Eventos Salvos. 4. Abaixo das Aulas Salvas opções de avaliar com ranque de 5 estrelas. |
| Critérios de Êxito | Eventos são avaliados com o ranque definido pelo usuário. |
| Responsável | [Nome do Responsável] |

## CT-07 - Diponibilização de Materiais de Ensino

| Item | Descrição |
|:----|:-----------|
| Requisitos Associados | RF-03	A plataforma deve disponibilizar materiais de ensino, como vídeos, artigos, quizzes e exercícios, para cada curso. |
| Passos | 1. Na página de usuário.<br> 2. Clicar no menu sanduiche canto superior esquerdo, ao lado da logo.<br> 3. Clicar na opção Materiais de Apoio. 4. Escolher com qual matéria começar. |
| Critérios de Êxito | As opções apresentadas são redirecionadas para sites especificos de cada matéria. |
| Responsável | [Nome do Responsável] |




 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
