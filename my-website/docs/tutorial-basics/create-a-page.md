---
sidebar_position: 1
---

# Urls

As urls em uma aplicação como essa é de extrema importância pois permitem direcionar as solicitações do usuário para as partes corretas do código.

## Estrutura do arquivo

Na parte superior do arquivo `urls.py` estarão localizados os imports que serão necessários para as urls funcionarem de maneira correta e efetiva durante a navegação. Seguindo logo depois das urls da aplicação de fato.

### Realizando os import's
importar a variável `path` é importante pois ela é quem define as rotas das Urls que serão passadas no arquivo.

```
from django.urls import path
```
Importa todas as funções do arquivo `view` que vai ser utilizada no arquivo onde os imports estão.

```
from .views import *
``` 

O import em questão está usando uma biblioteca do `djangorestframework_simplejwt` que usa de token para realizar a autenticação do usuário. Retornando dois tipos de token um de acesso e um refresh.
``` 
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
```

## Corpo do Arquivo

```

```
Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
