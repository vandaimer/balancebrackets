###Balanced Brackets

# Recebe uma sequência de caracteres e determina se a sequência está correta ou não.

# Caminhos para solução
- Primeira ideia foi implementar uma Regex, mas após várias tentativas percebi que era necessário um operador de recursão para auxiliar. Lendo como funciona Regex em JavaScript especificamente, soube que JavaScript não tem operador de recursão em Regex. Com mais algumas pesquisa, descobri que PHP tem e para Python tem o seguinte module [regex](https://pypi.org/project/regex/ "regex") que dispôe de operadores de recursão.
- Segunda ideia e a que está implementado foi implementar um algoritmo para contagem de caracteres, como precedência os caracteres de "abertura" tais como **(**, **{** ou **[** soman 1 na contagem e quando encontra os caracteres de "fechamendo" tais como **)**, **}** ou **]** decrementa 1. Obs: Cada "tipo" de caracter é avalidado separadamente.


# O projeto
- Apenas 1 arquivo para a classe que implementa o algoritmo e outro arquivo para iniciar o projeto como um todo.

# Como executar sem docker
- Instalar as depêndencias executando  ```yarn ```
- Executar comando de build, pois o projeto usa babel para transpilar os arquivos  ```yarn build```
- Para executar basta rodar  ```yarn start 'string_a_ser_validada'```. Exemplo ```yarn start '()()'```

# Como executar com docker
- Rodar ```make``` para fazer o build da imagem.
- Rodar ```make run string='string_a_ser_validada'``` para fazer o build da imagem.

# Exemplo de sequências
- ```(){}[]``` é válida
- ```[{()}](){}``` é válida
- ```[]{()``` não é válida
- ```[{)]``` não é not válida
