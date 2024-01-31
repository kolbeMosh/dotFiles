class BinaryGate(LogicGate):
   def __init__(self, lbl: str):
      super.__init__(self, lbl)
      self.pin_a = None
      self.pin_b = None
   def set_pin_a(self, newval: int):
   def set_pin_b(self, newval: int):
   def get_pin_a(self) -> int:
   def get_pin_b(self) -> int:
   def set_next_pin(self, source) -> None:
