# desafio-ip
Desafio Intelipost

# O Desafio

Foi criar um servidor NodeJs conforme procedimentos abaixo:

Instalando o Projeto node express

	express --view=ejs back-app
	cd back-app
	npm install	
	npm start

Acessando o site

- Home
http://<ip>/store/deploy

- Download do csv
http://<ip>/store/deploys.csv

- GET para start do deploy
http://<ip>/store/deploy?name=DEPLOY001&action=start

-  GET para end do deploy com querystrings
http://<ip>/store/deploy?name=DEPLOY001&action=stop&status=ok

Criando o container

	vi Dockerfile
	docker build -t back-app .
 	docker run -p 3000:3000 -d back-app
 	docker ps -a

Foi criado um IAC com um exemplo de deploy no AKS - Kubernetes da Azure.

## Opcionais

Melhorias possíveis:

  * Uso Mongo
  * Uso de SSL
  * Chamadas POST
  * Uso de segurança ou header de autenticacao

Notas

## Entregável

  * Código fonte, arquivos de configuração etc em um repositório no github
   
  https://github.com/leoym/desafio-ip

## Diferenciais

Complementos
  - Resiliência e segurança
  - APM
  - Stress testing
