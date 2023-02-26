.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build: ## builds dev docker containers
	docker compose build --pull app

build-next: ## builds next.js app
	docker compose run --rm --no-deps --entrypoint npm app run build

build-proxy: ## builds caddy proxy
	docker compose build --pull proxy

build-images: ## builds all compose images
	docker compose build

install: ## installs dependencies
	docker compose run --rm --no-deps --entrypoint npm app install

typecheck: ## run npm typecheck
	docker compose run --rm --no-deps --entrypoint npm app run typecheck

