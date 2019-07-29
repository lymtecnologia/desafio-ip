Kubernetes files
Docker files

# Exemplo de kubernete deployment file no AKS Azure

Procedimentos:

* Configurar o AKS

	az acr login --name acrlymtec
   
        VERSION=1

	docker build -t demo-node-1.0 .

	docker tag  node-1.0 acr-xxxxx.azurecr.io/demo-node-1.0:v$VERSION
	
	docker push acr-xxxxx.azurecr.io/demo-node-1.0:v$VERSION

	kubectl apply -f demo-node-1.0.yml

