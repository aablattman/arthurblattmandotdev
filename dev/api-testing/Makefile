.PHONY: build build-fastapi build-gin start start-fastapi start-gin wrk-compare

FASTAPI_PORT = 8001
GIN_PORT = 8002
WRK_DURATION = 10s
WRK_THREADS = 4
WRK_CONNECTIONS = 100

build: build-fastapi build-gin

build-fastapi:
	docker build -f Dockerfile_fastapi -t fastapi-demo .

build-gin:
	docker build -f Dockerfile_gin -t gin-demo .

start: start-fastapi start-gin

start-fastapi:
	docker run -d --rm -p $(FASTAPI_PORT):8000 --name fastapi-demo fastapi-demo

start-gin:
	docker run -d --rm -p $(GIN_PORT):8000 --name gin-demo gin-demo

wrk-compare:
	@echo "Benchmarking FastAPI on port $(FASTAPI_PORT)..."
	@wrk -t$(WRK_THREADS) -c$(WRK_CONNECTIONS) -d$(WRK_DURATION) http://localhost:$(FASTAPI_PORT)/ping > fastapi_bench.txt
	@echo "Benchmarking Gin on port $(GIN_PORT)..."
	@wrk -t$(WRK_THREADS) -c$(WRK_CONNECTIONS) -d$(WRK_DURATION) http://localhost:$(GIN_PORT)/ping > gin_bench.txt
	@echo "\n📊 FastAPI Result:"
	@cat fastapi_bench.txt | grep -E "Requests/sec|Latency|Transfer/sec"
	@echo "\n📊 Gin Result:"
	@cat gin_bench.txt | grep -E "Requests/sec|Latency|Transfer/sec"
