---
sidebar_position: 3
---

# Models


Ele serve para criar e definir os modelos de dados.
Com ele é possível manipular as tabelas do banco de dados com base na estrutura definida no código

**From django.db import models:** A importação do módulo models do pacote django.db é utilizada para definir modelos de banco de dados no Django, permite criar tabelas e interagir com os dados armazenados, definindo campos como texto, números e datas.

## Class Cadastro
essa classe é uma tabela que serve para armazenar os dados de cadastro dos usuários


```
class Cadastro(models.Model):
    ni = models.CharField(max_length=15)
    nome = models.CharField(max_length=255)
    email = models.EmailField()
    cel = models.CharField(max_length=255)
    ocup = models.FloatField()
```

#### Dados da classe Cadastro:

- **ni:** representa o número de identificação do professor e é um VARCHAR com
capacidade máxima de 15 caracteres
- **nome:** representa o nome e é um dado VARCHAR com capacidade máxima 255
caracteres
- **email:** representa o e-mail e é um dado de validação de e-mail
- **cel:** representa o numero de celular e é um dado VARCHAR com capacidade máxima
de 255 caracteres
- **ocup:** representa a taxa em porcentagem da ocupação do professor dentro do seu
horário de trabalho e é um dado de valor numérico decimal



## Class Disciplinas
essa classe é uma tabela que serve para armazenar informações sobre as disciplinas

```
class Disciplinas(models.Model):
    cod = models.CharField(max_length=100)
    disc = models.CharField(max_length=100) 
    ch = models.IntegerField()              
```
#### Dados da classe Disciplinas:
- **cod** representa o código da disciplina e é um VARCHAR com capacidade máxima de
100 caracteres
- **disc:** representa o nome da disciplina, ele é um VARCHAR com capacidade máxima de
100 caracteres
- **ch:** representa a carga horária da disciplina em questão, ele é um VARCHAR com
capacidade máxima de 100 caracteres


## Class Ambiente
essa classe é uma tabela que serve para armazenar as informações sobre salas/laboratórios

```
PERIODOS = [
        ('M', 'Manhã'),
        ('T', 'Tarde'),
        ('N', 'Noite'),
        ('I', 'Integral'),
    ]
class Ambiente(models.Model):
    cod = models.CharField(max_length=255)
    sala = models.CharField(max_length=255)
    cap = models.IntegerField()
    resp = models.CharField(max_length=255)
    per = models.CharField(choices=PERIODOS, max_length=10, default="M")
```

#### Dados da classe Ambiente:
- **cod:** representa o código do ambiente e é um dado VARCHAR com capacidade máxima
de 255 caracteres
- **sala:** representa o nome do ambiente e é um dado VARCHAR com capacidade máxima
de 255 caracteres
- **cap:** representa a capacidade máxima de alunos e é um dado inteiro
- **resp:** representa o nome do responsável pelo ambiente e é um VARCHAR com
capacidade máxima de 255 caracteres
- **per:** representa o período do ambiente, é um dado do tipo VARCHAR, com capacidade
máxima de 10 caracteres e possui um choices que contém a opção de selecionar um dos os
períodos disponíveis, contudo, o dado também possui um valor padrão(default) que é M,
então caso o usuário não selecione nenhum período, será considerado o que está definido
como valor padrão.
> PERIODOS: ele é um choices que possui todas as opções de períodos que o
usuário poderá selecionar, sendo eles:
```
PERIODOS = [
        ('M', 'Manhã'),
        ('T', 'Tarde'),
        ('N', 'Noite'),
        ('I', 'Integral'),
    ]
```

## Class Turma
Essa classe é uma tabela que serve para armazenar as informações sobre as turmas
```
class Turma(models.Model):
    cod = models.CharField(max_length=255)
    turrma = models.CharField(max_length=255)
```

#### Dados da classe Turma:
- **cod:** representa o código da turma e é um VARCHAR com capacidade máxima de
255 caracteres
- **turma:** representa o nome da turma e é um VARCHAR com capacidade máxima de
255 caracteres


## Class Curso
essa classe é uma tabela que serve para armazenar as informações sobre os crusos

```
TIPOS = [
    ('CAI', 'Aprendizagem'),
    ('CT','Técnico'),
    ('CS','Superior'),
    ('FIC','Formação')
]
class Curso(models.Model):
    cod = models.CharField(max_length=255)      #Código             #TEC
    curso = models.CharField(max_length=255)    #Curso              #Técnico em Desenvolvimento de Sistemas
    tipo = models.CharField(max_length=20, choices=TIPOS, default="CT")
    ha =  models.CharField(max_length=255)
```
#### Dados da classe Curso:
- **cod:** representa o código do curso e é um VARCHAR com capacidade máxima de
255 caracteres
- **curso:** representa o nome do curso e é um VARCHAR com capacidade máxima
de 255 caracteres
- **tipo:** representa qual tipo de curso é, o dado é do tipo VARCHAR, com
capacidade máxima de 20 caracteres e possui um choices que contém a opção
de selecionar um dos tipos de curso. Contudo, o dado também possui um valor
padrão (default) que é o CT, então caso o usuário não selecione nenhum tipo de
curso, será considerado o que está definido como valor padrão (default).
o
- **ha:** representa a Hora Aula e é um VARCHAR com capacidade máxima de 255
caracteres
>TIPOS: ele é um choices com todas as opções de tipos de curso que o
usuário poderá selecionar, sendo eles:
```
TIPOS = [
    ('CAI', 'Aprendizagem'),
    ('CT','Técnico'),
    ('CS','Superior'),
    ('FIC','Formação')
]
```


<!-- 
<!-- Create a file at `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much as you like.
```

A new blog post is now available at [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings). -->
