import service_pb2_grpc as pb
import service_pb2 as protos
import grpc
import time
import random
import concurrent.futures as futures


class TemperatureController(pb.TemperatureControllerServicer):
    def __init__(self):
        self.overrideHeat = False
        self.overrideCool = False

    def SetTemperature(self, request, context):
        print("Setting temperature to " + str(request.desiredTemperature))
        return protos.TemperatureSetResponse(desiredTemperature=request.desiredTemperature)

    def GetTemperature(self, request, context):
        i = 130
        while True:
            time.sleep(1)
            print("sleeping")
            i += random.randint(-1, 1)
            yield protos.GetTemperatureResponse(temperature=i)

    def SetOverrides(self, request, context):
        self.overrideHeat = request.overrideState.heat
        self.overrideCool = request.overrideState.cool
        print("Setting overrides, heat: " + str(request.overrideState.heat) + " cool: " + str(request.overrideState.cool))
        return protos.SetOverridesResponse(overrideState=request.overrideState)

server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
pb.add_TemperatureControllerServicer_to_server(
  TemperatureController(), server)
server.add_insecure_port('[::]:50051')
server.start()

print("Server Started")

while True:
    time.sleep(100)
