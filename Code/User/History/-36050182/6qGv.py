import LogicGate

class UnaryGate(LogicGate):
   def __init__(self, lbl: str):
      super.__init__(lbl)
      self.pin = None

   def get_pin(self) -> int:
      return self.pin
   
   def set_pin(self, newval: int) -> None:
      self.pin = int(input(f"Enter pin A input for gate\
                             {self.get_label()}: "))
   def set_next_pin(self, source) -> None:




