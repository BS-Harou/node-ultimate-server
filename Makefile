IMAGE=node-ultimate-server

build:
	docker build -t ${IMAGE} .

push: build
	docker push ${IMAGE}

run-i:
	docker run --rm -it -P ${IMAGE}

run:
	docker run -d -P --name "node-ultimate-server" ${IMAGE}
