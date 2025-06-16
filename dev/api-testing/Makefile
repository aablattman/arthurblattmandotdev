.PHONY: build build-fastapi build-gin start start-fastapi start-gin wrk-compare

FASTAPI_PORT = 8001
GIN_PORT = 8002
WRK_DURATION = 10s
WRK_THREADS = 4
WRK_CONNECTIONS = 100
EXPRESS_PORT = 8003
RUST_PORT = 8004

build: build-fastapi build-gin build-express build-rust


build-fastapi:
	docker build -f Dockerfile_fastapi -t fastapi-demo .

build-gin:
	docker build -f Dockerfile_gin -t gin-demo .

build-express:
	docker build -f Dockerfile_express -t express-demo .

build-rust:
	docker build -f Dockerfile_rust -t rust-demo .


start: start-fastapi start-gin start-express start-rust


stop: stop-fastapi stop-gin stop-express stop-rust


start-fastapi:
	docker run -d --rm -p $(FASTAPI_PORT):8000 --name fastapi-demo fastapi-demo

start-gin:
	docker run -d --rm -p $(GIN_PORT):8000 --name gin-demo gin-demo

start-express:
	docker run -d --rm -p $(EXPRESS_PORT):8000 --name express-demo express-demo

start-rust:
	docker run -d --rm -p $(RUST_PORT):8000 --name rust-demo rust-demo


stop-gin:
	docker stop gin-demo

stop-fastapi:
	docker stop fastapi-demo

stop-express:
	docker stop express-demo

stop-rust:
	docker stop rust-demo


wrk-compare:
	@echo "Benchmarking FastAPI on port $(FASTAPI_PORT)..."
	@wrk -t$(WRK_THREADS) -c$(WRK_CONNECTIONS) -d$(WRK_DURATION) http://localhost:$(FASTAPI_PORT)/ping > fastapi_bench.txt

	@echo "Benchmarking Gin on port $(GIN_PORT)..."
	@wrk -t$(WRK_THREADS) -c$(WRK_CONNECTIONS) -d$(WRK_DURATION) http://localhost:$(GIN_PORT)/ping > gin_bench.txt

	@echo "Benchmarking Express on port $(EXPRESS_PORT)..."
	@wrk -t$(WRK_THREADS) -c$(WRK_CONNECTIONS) -d$(WRK_DURATION) http://localhost:$(EXPRESS_PORT)/ping > express_bench.txt

	@echo "Benchmarking Rust on port $(RUST_PORT)..."
	@wrk -t$(WRK_THREADS) -c$(WRK_CONNECTIONS) -d$(WRK_DURATION) http://localhost:$(RUST_PORT)/ping > rust_bench.txt

	@echo "\n📊 FastAPI Result:"
	@cat fastapi_bench.txt | grep -E "Requests/sec|Latency|Transfer/sec"

	@echo "\n📊 Gin Result:"
	@cat gin_bench.txt | grep -E "Requests/sec|Latency|Transfer/sec"

	@echo "\n📊 Express Result:"
	@cat express_bench.txt | grep -E "Requests/sec|Latency|Transfer/sec"

	@echo "\n📊 Rust Result:"
	@cat rust_bench.txt | grep -E "Requests/sec|Latency|Transfer/sec"


wrk-detailed:
	@echo "Running detailed POST benchmark for FastAPI..."
	@wrk -t$(WRK_THREADS) -c$(WRK_CONNECTIONS) -d$(WRK_DURATION) -s wrk_post.lua http://localhost:$(FASTAPI_PORT)/ping > fastapi_detailed.txt
	@cat fastapi_detailed.txt | grep -E "Requests/sec|Transfer/sec"
	@echo "\nRunning detailed POST benchmark for Gin..."
	@wrk -t$(WRK_THREADS) -c$(WRK_CONNECTIONS) -d$(WRK_DURATION) -s wrk_post.lua http://localhost:$(GIN_PORT)/ping > gin_detailed.txt
	@cat gin_detailed.txt | grep -E "Requests/sec|Transfer/sec"
	@echo "\nRunning detailed POST benchmark for Express..."
	@wrk -t$(WRK_THREADS) -c$(WRK_CONNECTIONS) -d$(WRK_DURATION) -s wrk_post.lua http://localhost:$(EXPRESS_PORT)/ping > express_detailed.txt
	@cat express_detailed.txt | grep -E "Requests/sec|Transfer/sec"
	@echo "\nRunning detailed POST benchmark for Rust..."
	@wrk -t$(WRK_THREADS) -c$(WRK_CONNECTIONS) -d$(WRK_DURATION) -s wrk_post.lua http://localhost:$(RUST_PORT)/ping > rust_detailed.txt
	@cat rust_detailed.txt | grep -E "Requests/sec|Transfer/sec"

