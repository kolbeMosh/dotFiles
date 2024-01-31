import BinaryGate

class OrGate(BinaryGate):
   def __init__(self, lbl: str):
      super().__init__(lbl)
  
   def perform_gate_logic(self) -> None:
      if (self.pin_a == None):
         self.set_pin_a()
      if (self.pin_b == None):
         self.set_pin_a()
      self.set_output(self.pin_a or self.pin_b)