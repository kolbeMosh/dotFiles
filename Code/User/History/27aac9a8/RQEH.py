import BinaryGate

class OrGate(BinaryGate):
   def __init__(self, lbl: str):
      super.__init__(lbl)
   def perform_gate_logic(self) -> None: