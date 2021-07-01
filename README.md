# Get genres and studios from MyAnimiList

end points
1. /dubladores
2. /protagonistas

parametros em ambos  
string q = query string para filtrar no campo nome 
##

Bibliotecas  
1. express como servidor http  
2. axios para realizar requests http 
3. mongoose realizar com bando de dados
##

Objeto de retorno  (https://api-projeto-final-ppw2.herokuapp.com/protagonistas)
```javascript
[
  {
    "_id": "60de3a1a8b7deb00155b76df",
    "nome": "SON GOKU (KAKAROTTO)",
    "genero": "Masculino",
    "vivo": true,
    "classe": "Sayajin",
    "rate": 5,
    "dublador": {
      "_id": "60de3a0b8b7deb00155b76dd",
      "nome": "WENDEL LUÍS BEZERRA DA SILVA",
      "nascimento": "1974-06-18T00:00:00.000Z",
      "telefone": "+55 48 99876-5643",
      "endereco": "16656 King Squares Apt. 312 - Stillwater, VT / 87168",
      "createdAt": "2021-07-01T21:56:27.702Z",
      "updatedAt": "2021-07-01T22:00:11.530Z",
      "__v": 0,
      "anime": "60de3a447843870015cd8ed9"
    },
    "createdAt": "2021-07-01T21:56:42.668Z",
    "updatedAt": "2021-07-01T21:56:42.668Z",
    "__v": 0
  }
]
```
id = Identificação Unica  
nome = Nome do protagonista  
genero = Genero do protagonista  
classe = Classe do protagonista  
rate = Classificação de popularidade  
dublador = Retorna o dublador  
##
objeto de retorno  (https://api-projeto-final-ppw2.herokuapp.com/dubladores)
```javascript
[
  {
    "_id": "60de3a0b8b7deb00155b76dd",
    "nome": "WENDEL LUÍS BEZERRA DA SILVA",
    "nascimento": "1974-06-18T00:00:00.000Z",
    "telefone": "+55 48 99876-5643",
    "endereco": "16656 King Squares Apt. 312 - Stillwater, VT / 87168",
    "createdAt": "2021-07-01T21:56:27.702Z",
    "updatedAt": "2021-07-01T22:00:11.530Z",
    "__v": 0,
    "anime": "60de3a447843870015cd8ed9"
  }
]
```
id = Identificação Unica  
nome = Nome do dublador  
nascimento = Data de nascimento do dublador  
telefone = Telefone do dublador  
endereco = Endereço do dublador  
anime = Retorna o anime da outra API
