---
sidebar_position: 2
---

# Serializer.py

Este arquivo está localizado no diretório **api**:

- caminho **back/api/serializers.py**

## Função do Serializer

Se trata de um componente do Django REST Framework cujo sua principal função é a serialização de dados, realizando o processo de converter um objeto ou estrutura de dados em um formato que possa ser armazenado ou transmitido, nesse caso, no formato JSON.


## Imports

O import torna o código de um módulo disponível em outro, o que permite reutilizar elementos de outros arquivos, estruturando o projeto de forma mais eficiente.


### Importação do Módulo serializers:

```md title="import serializer" {1-4}

from rest_framework import serializers

```
Esta linha importa o módulo serializers que fornece as ferramentas necessárias para transformar dados de modelos Django em formatos nativos do Python, como uma lista, e convertê-los em JSON. Também são usados para validar e desserializar dados recebidos do usuário.

### Importação dos models.py:

```md title="import models" {1-4}

from .models import *

```
A importação dos modelos define os dados que serão manipulados pelo serializer. Todos os modelos utilizados estão localizados no arquivo “models.py”. O “*” no final do comando indica que todos eles estão importados e prontos para uso.

## Definição de Serializers para os Modelos

```md title="CadastroSerializer" {1-6}

class CadastroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cadastro
        fields = '__all__'

```

Serializa todos os campos do modelo “Cadastro”. Usado para mtanipular os dados de cadastro dos usuários ou entidades relacionadas.

```md title="DisciplinaSerializer" {1-6}

class DisciplinaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disciplinas
        fields = '__all__'

```

Serializa todos os campos do modelo “Disciplina”. Usado para representar e manipular informações sobre disciplinas cadastradas no sistema.

```md title="AmbienteSerializer" {1-6}

class AmbienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ambiente
        fields = '__all__'

```

Serializa todos os campos do modelo “Ambiente”. Serve para lidar com os dados dos ambientes físicos ou virtuais disponíveis (ex: salas, laboratórios, etc).

```md title="TurmaSerializer" {1-6}

class TurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turma
        fields = '__all__'

```

Serializa todos os campos do modelo “Turma”. Responsável por manipular os dados relacionados às turmas.

```md title="CursoSerializer" {1-6}

class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'

```

Serializa todos os campos do modelo “Curso”. Utilizado para lidar com as informações dos cursos oferecidos pela instituição ou plataforma.