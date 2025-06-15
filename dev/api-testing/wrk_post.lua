wrk.method = "POST"
wrk.body   = '{"message": "hello world"}'
wrk.headers["Content-Type"] = "application/json"
wrk.headers["X-Demo-Token"] = "benchmark-123"

done = function(summary, latency, requests)
  io.write(string.format("\n📊 Detailed Latency (FastAPI or Gin):\n"))
  io.write(string.format("  95th percentile: %.2f ms\n", latency:percentile(95.0) / 1000))
  io.write(string.format("  99th percentile: %.2f ms\n", latency:percentile(99.0) / 1000))
end
