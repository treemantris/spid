// package: 
// file: service.proto

import * as service_pb from "./service_pb";

type TemperatureControllerSetTemperature = {
  readonly methodName: string;
  readonly service: typeof TemperatureController;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.TemperatureSetRequest;
  readonly responseType: typeof service_pb.TemperatureSetResponse;
};

type TemperatureControllerGetTemperature = {
  readonly methodName: string;
  readonly service: typeof TemperatureController;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof service_pb.GetTemperatureRequest;
  readonly responseType: typeof service_pb.GetTemperatureResponse;
};

type TemperatureControllerSetOverrides = {
  readonly methodName: string;
  readonly service: typeof TemperatureController;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.SetOverridesRequest;
  readonly responseType: typeof service_pb.SetOverridesResponse;
};

export class TemperatureController {
  static readonly serviceName: string;
  static readonly SetTemperature: TemperatureControllerSetTemperature;
  static readonly GetTemperature: TemperatureControllerGetTemperature;
  static readonly SetOverrides: TemperatureControllerSetOverrides;
}
