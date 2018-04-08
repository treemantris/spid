init-venv:
	python -m virtualenv venv
	bash -c "source ./venv/bin/activate && pip install grpcio-tools"

gen-protos:
	python -m grpc_tools.protoc  --python_out=./ --grpc_python_out=./ -I. service.proto
