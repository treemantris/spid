import service_pb2_grpc as pb
import service_pb2 as protos
import grpc
import concurrent.futures as futures


class TemperatureController(pb.TemperatureControllerServicer):
    def SetTemperature(self, request, context):
        print("Setting temperature to " + request.desiredTemperature)
        return protos.TemperatureSetReponse(desiredTemperature=request.desiredTemperature)

    def GetTemperature(self, request, context):
        for i in range(1, 10):
            yield protos.GetTemperatureResponse(temperature=i)

server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
pb.add_TemperatureControllerServicer_to_server(
  TemperatureController(), server)
server.add_insecure_port('[::]:50051')
server.start()

print("Server Started")
