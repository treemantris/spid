// package: 
// file: service.proto

var service_pb = require("./service_pb");

var TemperatureController = (function () {
  function TemperatureController() {}
  TemperatureController.serviceName = "TemperatureController";
  return TemperatureController;
}());

TemperatureController.SetTemperature = {
  methodName: "SetTemperature",
  service: TemperatureController,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.TemperatureSetRequest,
  responseType: service_pb.TemperatureSetResponse
};

TemperatureController.GetTemperature = {
  methodName: "GetTemperature",
  service: TemperatureController,
  requestStream: false,
  responseStream: true,
  requestType: service_pb.GetTemperatureRequest,
  responseType: service_pb.GetTemperatureResponse
};

TemperatureController.SetOverrides = {
  methodName: "SetOverrides",
  service: TemperatureController,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.SetOverridesRequest,
  responseType: service_pb.SetOverridesResponse
};

exports.TemperatureController = TemperatureController;

