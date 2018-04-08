source venv/bin/activate
python -i server.py && grpcwebproxy --backend_addr localhost:50051 --run_tls_server=false
