---
sidebar_position: 1
---

# Urls

As urls em uma aplicação como essa é de extrema importância pois permitem direcionar as solicitações do usuário para as partes corretas do código.

## Estrutura do arquivo

Na parte superior do arquivo `urls.py` estarão localizados os imports que serão necessários para as urls funcionarem de maneira correta e efetiva durante a navegação. Seguindo logo depois das urls da aplicação de fato.

### Realizando os import's
importar a variável `path` é importante pois ela é quem define as rotas das Urls que serão passadas no arquivo.

```py title="urls.py"
from django.urls import path
```
Importa todas as funções do arquivo `view` que vai ser utilizada no arquivo onde os imports estão.


```py title="urls.py"
from .views import *
```

O import em questão está usando uma biblioteca do `djangorestframework_simplejwt` que usa de token para realizar a autenticação do usuário. Retornando dois tipos de token um de acesso e um refresh.

```py title="urls.py"
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
```
## Urls Professores

As primeiras urls tem como finalidade listar os professores cadastrados no banco de dados. Assim como realizar uma busca pelo `id` do professor caso a listagem seja de forma mais específica.

```py title="urls.py"
path('professores', listar_professores),
path('prof', ProfessoresView.as_view()),
path('id/<int:pk>', ProfessoresDetailView.as_view())
```

O token é gerado para realizar a navegação pela aplicação, mas o token pode expirar depois de um certo tempo de uso, por isso o `refresh` faz o papel de renovar o token para continuação da navegação.

```py title="urls.py"
path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'), 
path('refresh/', TokenRefreshView.as_view(), name='token_refresh'), 
```

Para buscar por um professor pelo seu nome, é possìvel que o usuário digite o nome e a busca seja realizada.

```py title="urls.py"
path('buscar/nome/', buscar_nome_professor), 
path('search/', ProfessoresSearchView.as_view()),
```

## Urls Disciplinas

A visualização e a busca pelas disciplinas pode ser feita no endereço `disciplinas` além de ser possível visualizar de forma mais específica por meio da chave primária da disciplina.

```py title="urls.py"
path('disciplinas', DisciplinasView.as_view()),
path('disciplina/<int:pk>', DisciplinaDetailView.as_view()),
```

## Urls Ambientes 

Os ambientes podem ser visualizados e buscados da mesma forma que as disciplinas, além de serem buscados pela chave primária do ambiente de acordo com o id que se refere a ela no banco de dados.

```py title="urls.py"
path('ambientes', AmbientesView.as_view()),
path('ambiente/<int:pk>', AmbienteDetailView.as_view()),
```
## Urls Turmas

As turmas podem ser visualizadas de um modo geral, além de serem buscadas por meio da chave primária.
```py title="urls.py"

path('turmas', TurmasView.as_view()),
path('turma/<int:pk>', TurmaDetailView.as_view()),
```

## Urls Curso

Os cursos podem ser visualizados de forma integral, além de buscados por meio da chave primária e ser exibidas os detalhes desse curso nessa busca mais detalhada que o usuário pode realizar.

```py title="urls.py"
path('cursos', CursosView.as_view()),
path('curso/<int:pk>', CursoDetailView.as_view()),
```
