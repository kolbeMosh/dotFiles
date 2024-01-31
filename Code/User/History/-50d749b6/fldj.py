import LogicGate

class BinaryGate(LogicGate):
   def __init__(self, lbl: str):
      super.__init__(self, lbl)
      self.pin_a = None
      self.pin_b = None

   def set_pin_a(self, newval: int):
      self.pin_a = int(input(f"Enter pin A input for gate\
                             {self.get_label()}: "))
   
   def set_pin_b(self, newval: int):
      self.pin_b = int(input(f"Enter pin A input for gate\
                             {self.get_label()}: "))

   def get_pin_a(self) -> int:
      return self.pin_a
      
   def get_pin_b(self) -> int:
      return self.pin_b
   
   def set_next_pin(self, source) -> None:
      pass