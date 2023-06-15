.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build-dev: ## builds dev image
	docker build -t devpage-dev -f Dockerfile --target=builder .

build-next: ## builds next.js app
	docker run -it -v $(PWD):/app --rm --name devpage --entrypoint npm devpage-dev run build

build: ## builds image with site statically served with caddy
	docker build -t devpage --name devpage -f Dockerfile .

run-dev: ## run development server on port 3000
	docker run -it -v $(PWD):/app --rm --name devpage -p 3000:3000 --entrypoint npm devpage-dev run dev

install: ## installs dependencies
	docker run -it -v $(PWD):/app --rm --name devpage --entrypoint npm devpage-dev install

typecheck: ## run npm typecheck
	docker run -it -v $(PWD):/app --rm --name devpage --entrypoint npm devpage-dev run typecheck

