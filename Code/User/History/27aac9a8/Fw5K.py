import BinaryGate

class OrGate(BinaryGate):
   def __init__(self, lbl: str):
      super.__init__(lbl)
   def perform_gate_logic(self) -> None:
      if (pin_a != None and pin_b != None):
        return pin_a or pin_b
      else:
         self.set_pin_a()
         self.set_pin_b()
         return pin_a or pin_b