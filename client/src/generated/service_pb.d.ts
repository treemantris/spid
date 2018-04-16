// package: 
// file: service.proto

import * as jspb from "google-protobuf";

export class TemperatureSetRequest extends jspb.Message {
  getDesiredtemperature(): number;
  setDesiredtemperature(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemperatureSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TemperatureSetRequest): TemperatureSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemperatureSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemperatureSetRequest;
  static deserializeBinaryFromReader(message: TemperatureSetRequest, reader: jspb.BinaryReader): TemperatureSetRequest;
}

export namespace TemperatureSetRequest {
  export type AsObject = {
    desiredtemperature: number,
  }
}

export class TemperatureSetResponse extends jspb.Message {
  getDesiredtemperature(): number;
  setDesiredtemperature(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemperatureSetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TemperatureSetResponse): TemperatureSetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemperatureSetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemperatureSetResponse;
  static deserializeBinaryFromReader(message: TemperatureSetResponse, reader: jspb.BinaryReader): TemperatureSetResponse;
}

export namespace TemperatureSetResponse {
  export type AsObject = {
    desiredtemperature: number,
  }
}

export class GetTemperatureRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTemperatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTemperatureRequest): GetTemperatureRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTemperatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTemperatureRequest;
  static deserializeBinaryFromReader(message: GetTemperatureRequest, reader: jspb.BinaryReader): GetTemperatureRequest;
}

export namespace GetTemperatureRequest {
  export type AsObject = {
  }
}

export class GetTemperatureResponse extends jspb.Message {
  getTemperature(): number;
  setTemperature(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTemperatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTemperatureResponse): GetTemperatureResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTemperatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTemperatureResponse;
  static deserializeBinaryFromReader(message: GetTemperatureResponse, reader: jspb.BinaryReader): GetTemperatureResponse;
}

export namespace GetTemperatureResponse {
  export type AsObject = {
    temperature: number,
  }
}

export class SetOverridesRequest extends jspb.Message {
  hasOverridestate(): boolean;
  clearOverridestate(): void;
  getOverridestate(): OverrideState | undefined;
  setOverridestate(value?: OverrideState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetOverridesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetOverridesRequest): SetOverridesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetOverridesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetOverridesRequest;
  static deserializeBinaryFromReader(message: SetOverridesRequest, reader: jspb.BinaryReader): SetOverridesRequest;
}

export namespace SetOverridesRequest {
  export type AsObject = {
    overridestate?: OverrideState.AsObject,
  }
}

export class SetOverridesResponse extends jspb.Message {
  hasOverridestate(): boolean;
  clearOverridestate(): void;
  getOverridestate(): OverrideState | undefined;
  setOverridestate(value?: OverrideState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetOverridesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetOverridesResponse): SetOverridesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetOverridesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetOverridesResponse;
  static deserializeBinaryFromReader(message: SetOverridesResponse, reader: jspb.BinaryReader): SetOverridesResponse;
}

export namespace SetOverridesResponse {
  export type AsObject = {
    overridestate?: OverrideState.AsObject,
  }
}

export class OverrideState extends jspb.Message {
  getHeat(): boolean;
  setHeat(value: boolean): void;

  getCool(): boolean;
  setCool(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OverrideState.AsObject;
  static toObject(includeInstance: boolean, msg: OverrideState): OverrideState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OverrideState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OverrideState;
  static deserializeBinaryFromReader(message: OverrideState, reader: jspb.BinaryReader): OverrideState;
}

export namespace OverrideState {
  export type AsObject = {
    heat: boolean,
    cool: boolean,
  }
}

