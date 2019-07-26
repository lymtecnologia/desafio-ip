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

http://<ip>/store/deploy
http://<ip>/store/deploy?name=DEPLOY001&action=start
http://<ip>/store/deploy?name=DEPLOY001&action=stop&status=ok

Criando o container

	vi Dockerfile
	docker build -t back-app .
 	docker run -p 3000:3000 -d back-app
 	docker ps -a

## Opcionais

Opcionalmente, faça o maior número possível dos itens abaixo:

  * Mongo

Notas

## Entregável

  * Código fonte, arquivos de configuração etc em um repositório no github

## Diferenciais

Analisaremos:
  - Resiliência e segurança

