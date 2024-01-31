class UnaryGate(LogicGate):
   def __init__(self, lbl: str):
   def get_pin(self) -> int:
   def set_pin(self, newval: int) -> None:
   def set_next_pin(self, source) -> None:


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
    