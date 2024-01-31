import BinaryGate

class AndGate(BinaryGate):
   def __init__(self, lbl: str):
      super().__init__(lbl)
   def perform_gate_logic(self) -> None:
       self.set_output(self.pin_a and self.pin_b)
