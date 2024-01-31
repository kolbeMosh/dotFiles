import BinaryGate

class OrGate(BinaryGate):
   def __init__(self, lbl: str):
      super.__init__(lbl)
   def perform_gate_logic(self) -> None:
      if (self.pin_a != None and self.pin_b != None):
        return self.pin_a or self.pin_b
      else:
         self.set_pin_a()
         self.set_pin_b()
         return self.pin_a or self.pin_b