import service_pb2_grpc as pb
import service_pb2 as protos
import grpc

channel = grpc.insecure_channel('localhost:50051')
stub = pb.TemperatureControllerStub(channel)
response = stub.GetTemperature(protos.GetTemperatureRequest())

for r in response:
    print(r.temperature)
