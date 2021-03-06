# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: service.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='service.proto',
  package='',
  syntax='proto3',
  serialized_pb=_b('\n\rservice.proto\"3\n\x15TemperatureSetRequest\x12\x1a\n\x12\x64\x65siredTemperature\x18\x01 \x01(\x02\"4\n\x16TemperatureSetResponse\x12\x1a\n\x12\x64\x65siredTemperature\x18\x01 \x01(\x02\"\x17\n\x15GetTemperatureRequest\"-\n\x16GetTemperatureResponse\x12\x13\n\x0btemperature\x18\x01 \x01(\x02\"<\n\x13SetOverridesRequest\x12%\n\roverrideState\x18\x01 \x01(\x0b\x32\x0e.OverrideState\"=\n\x14SetOverridesResponse\x12%\n\roverrideState\x18\x01 \x01(\x0b\x32\x0e.OverrideState\"+\n\rOverrideState\x12\x0c\n\x04heat\x18\x01 \x01(\x08\x12\x0c\n\x04\x63ool\x18\x02 \x01(\x08\x32\xe2\x01\n\x15TemperatureController\x12\x43\n\x0eSetTemperature\x12\x16.TemperatureSetRequest\x1a\x17.TemperatureSetResponse\"\x00\x12\x45\n\x0eGetTemperature\x12\x16.GetTemperatureRequest\x1a\x17.GetTemperatureResponse\"\x00\x30\x01\x12=\n\x0cSetOverrides\x12\x14.SetOverridesRequest\x1a\x15.SetOverridesResponse\"\x00\x62\x06proto3')
)




_TEMPERATURESETREQUEST = _descriptor.Descriptor(
  name='TemperatureSetRequest',
  full_name='TemperatureSetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='desiredTemperature', full_name='TemperatureSetRequest.desiredTemperature', index=0,
      number=1, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=17,
  serialized_end=68,
)


_TEMPERATURESETRESPONSE = _descriptor.Descriptor(
  name='TemperatureSetResponse',
  full_name='TemperatureSetResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='desiredTemperature', full_name='TemperatureSetResponse.desiredTemperature', index=0,
      number=1, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=70,
  serialized_end=122,
)


_GETTEMPERATUREREQUEST = _descriptor.Descriptor(
  name='GetTemperatureRequest',
  full_name='GetTemperatureRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=124,
  serialized_end=147,
)


_GETTEMPERATURERESPONSE = _descriptor.Descriptor(
  name='GetTemperatureResponse',
  full_name='GetTemperatureResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='temperature', full_name='GetTemperatureResponse.temperature', index=0,
      number=1, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=149,
  serialized_end=194,
)


_SETOVERRIDESREQUEST = _descriptor.Descriptor(
  name='SetOverridesRequest',
  full_name='SetOverridesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='overrideState', full_name='SetOverridesRequest.overrideState', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=196,
  serialized_end=256,
)


_SETOVERRIDESRESPONSE = _descriptor.Descriptor(
  name='SetOverridesResponse',
  full_name='SetOverridesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='overrideState', full_name='SetOverridesResponse.overrideState', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=258,
  serialized_end=319,
)


_OVERRIDESTATE = _descriptor.Descriptor(
  name='OverrideState',
  full_name='OverrideState',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='heat', full_name='OverrideState.heat', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='cool', full_name='OverrideState.cool', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=321,
  serialized_end=364,
)

_SETOVERRIDESREQUEST.fields_by_name['overrideState'].message_type = _OVERRIDESTATE
_SETOVERRIDESRESPONSE.fields_by_name['overrideState'].message_type = _OVERRIDESTATE
DESCRIPTOR.message_types_by_name['TemperatureSetRequest'] = _TEMPERATURESETREQUEST
DESCRIPTOR.message_types_by_name['TemperatureSetResponse'] = _TEMPERATURESETRESPONSE
DESCRIPTOR.message_types_by_name['GetTemperatureRequest'] = _GETTEMPERATUREREQUEST
DESCRIPTOR.message_types_by_name['GetTemperatureResponse'] = _GETTEMPERATURERESPONSE
DESCRIPTOR.message_types_by_name['SetOverridesRequest'] = _SETOVERRIDESREQUEST
DESCRIPTOR.message_types_by_name['SetOverridesResponse'] = _SETOVERRIDESRESPONSE
DESCRIPTOR.message_types_by_name['OverrideState'] = _OVERRIDESTATE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TemperatureSetRequest = _reflection.GeneratedProtocolMessageType('TemperatureSetRequest', (_message.Message,), dict(
  DESCRIPTOR = _TEMPERATURESETREQUEST,
  __module__ = 'service_pb2'
  # @@protoc_insertion_point(class_scope:TemperatureSetRequest)
  ))
_sym_db.RegisterMessage(TemperatureSetRequest)

TemperatureSetResponse = _reflection.GeneratedProtocolMessageType('TemperatureSetResponse', (_message.Message,), dict(
  DESCRIPTOR = _TEMPERATURESETRESPONSE,
  __module__ = 'service_pb2'
  # @@protoc_insertion_point(class_scope:TemperatureSetResponse)
  ))
_sym_db.RegisterMessage(TemperatureSetResponse)

GetTemperatureRequest = _reflection.GeneratedProtocolMessageType('GetTemperatureRequest', (_message.Message,), dict(
  DESCRIPTOR = _GETTEMPERATUREREQUEST,
  __module__ = 'service_pb2'
  # @@protoc_insertion_point(class_scope:GetTemperatureRequest)
  ))
_sym_db.RegisterMessage(GetTemperatureRequest)

GetTemperatureResponse = _reflection.GeneratedProtocolMessageType('GetTemperatureResponse', (_message.Message,), dict(
  DESCRIPTOR = _GETTEMPERATURERESPONSE,
  __module__ = 'service_pb2'
  # @@protoc_insertion_point(class_scope:GetTemperatureResponse)
  ))
_sym_db.RegisterMessage(GetTemperatureResponse)

SetOverridesRequest = _reflection.GeneratedProtocolMessageType('SetOverridesRequest', (_message.Message,), dict(
  DESCRIPTOR = _SETOVERRIDESREQUEST,
  __module__ = 'service_pb2'
  # @@protoc_insertion_point(class_scope:SetOverridesRequest)
  ))
_sym_db.RegisterMessage(SetOverridesRequest)

SetOverridesResponse = _reflection.GeneratedProtocolMessageType('SetOverridesResponse', (_message.Message,), dict(
  DESCRIPTOR = _SETOVERRIDESRESPONSE,
  __module__ = 'service_pb2'
  # @@protoc_insertion_point(class_scope:SetOverridesResponse)
  ))
_sym_db.RegisterMessage(SetOverridesResponse)

OverrideState = _reflection.GeneratedProtocolMessageType('OverrideState', (_message.Message,), dict(
  DESCRIPTOR = _OVERRIDESTATE,
  __module__ = 'service_pb2'
  # @@protoc_insertion_point(class_scope:OverrideState)
  ))
_sym_db.RegisterMessage(OverrideState)



_TEMPERATURECONTROLLER = _descriptor.ServiceDescriptor(
  name='TemperatureController',
  full_name='TemperatureController',
  file=DESCRIPTOR,
  index=0,
  options=None,
  serialized_start=367,
  serialized_end=593,
  methods=[
  _descriptor.MethodDescriptor(
    name='SetTemperature',
    full_name='TemperatureController.SetTemperature',
    index=0,
    containing_service=None,
    input_type=_TEMPERATURESETREQUEST,
    output_type=_TEMPERATURESETRESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='GetTemperature',
    full_name='TemperatureController.GetTemperature',
    index=1,
    containing_service=None,
    input_type=_GETTEMPERATUREREQUEST,
    output_type=_GETTEMPERATURERESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='SetOverrides',
    full_name='TemperatureController.SetOverrides',
    index=2,
    containing_service=None,
    input_type=_SETOVERRIDESREQUEST,
    output_type=_SETOVERRIDESRESPONSE,
    options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_TEMPERATURECONTROLLER)

DESCRIPTOR.services_by_name['TemperatureController'] = _TEMPERATURECONTROLLER

# @@protoc_insertion_point(module_scope)
