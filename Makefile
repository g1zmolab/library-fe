DOCKER_REPOSITORY ?= g1zmolab/gizmolib-fe
DOCKER_TAG ?= $(shell jq -r '.version' package.json)

.PHONY: build
build:
	docker build --no-cache -t ${DOCKER_REPOSITORY}:${DOCKER_TAG} -t ${DOCKER_REPOSITORY}:latest .

push:
	docker push ${DOCKER_REPOSITORY}:${DOCKER_TAG}
	docker push ${DOCKER_REPOSITORY}:latest
