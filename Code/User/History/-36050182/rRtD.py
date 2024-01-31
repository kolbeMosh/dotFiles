class LogicGate:
   def __init__(self, lbl: str):
   def get_label(self) -> str:
   def get_output(self) -> int:
   def set_output(self,newval: int) -> None:

class UnaryGate(LogicGate):
   def __init__(self, lbl: str):
   def get_pin(self) -> int:
   def set_pin(self, newval: int) -> None:
   def set_next_pin(self, source) -> None:

class BinaryGate(LogicGate):
   def __init__(self, lbl: str):
   def set_pin_a(self, newval: int):
   def set_pin_b(self, newval: int):
   def get_pin_a(self) -> int:
   def get_pin_b(self) -> int:
   def set_next_pin(self, source) -> None:

class OrGate(BinaryGate):
   def __init__(self, lbl: str):
   def perform_gate_logic(self) -> None:

class AndGate(BinaryGate):
   def __init__(self, lbl: str):
   def perform_gate_logic(self) -> None:

class NotGate(UnaryGate):
   def perform_gate_logic(self) -> None:

class Connector:
   def __init__(self, fgate: LogicGate, tgate: LogicGate):
   def get_from(self) -> LogicGate:
   def get_to(self) -> LogicGate:

class HalfAdder(BinaryGate):
   def __init__(self, lbl: str):
   def perform_gate_logic(self) -> None:
   def get_carry_bit(self):
    