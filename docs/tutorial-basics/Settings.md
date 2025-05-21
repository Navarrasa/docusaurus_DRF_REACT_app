---
sidebar_position: 5
---

# Settings

É um arquivo Python localizado na pasta do seu projeto (geralmente com o nome do projeto), onde você define como seu Django vai se comportar — desde a conexão com o banco de dados até as permissões de segurança.



## Import's

Os import `path` é usado para lidar com caminhos de arquivos e pastas já o import `timelta` que serve
para definir o tempo de duração do token de acesso.
```py title="settings.py"
from pathlib import Path
from datetime import timedelta
```

### Extensões
Em `INSTALLED_APPS` é onde fica localizado as extensões para a funcionalidade da aplicação, onde será aplicado
todas as extensões utilizadas, como as bibliotecas necessárias e a aplicação criada do django.
```py title="settings.py"
    'rest_framework',
    'api',
    'rest_framework_simplejwt',
    "corsheaders",
    'django_filters'
```


O trecho de código diz que o método padrão de autenticação da sua API será o JWT (JSON Web Token), fornecido pelo pacote `djangorestframework-simplejwt.`
```py title="settings.py"
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}
```


Esse trecho configura o comportamento dos tokens JWT no projeto, usando o pacote `djangorestframework-simplejwt`. Ele define como os tokens serão gerados, usados e quanto tempo vão durar
```py title="settings.py"
SIMPLE_JWT = {
    "AUTH_HEADER_TYPES": ("Bearer",),
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=60),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
}
```

Esse `middleware` vem do pacote django-cors-headers e é responsável basicamente por permitir ou bloquear requisições vindas de outros domínios.
```py title="settings.py"
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
```
