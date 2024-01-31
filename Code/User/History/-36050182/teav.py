import LogicGate

class UnaryGate(LogicGate):
   def __init__(self, lbl: str):
      super().__init__(lbl)
      self.pin = None

   def get_pin(self) -> int:
      if self.pin == None:
         int(input(f"Enter pin input for gate\
                             {self.get_label()}: "))
      return self.pin
   
   def set_pin(self, newval: int) -> None:
      self.pin = newval
   
   def set_next_pin(self, source) -> None:
       if self.pin_a == None:
            self.pin_a = source
       else:
          if self.pin_b == None:
             self.pin_b = source
          else:
             raise RuntimeError("Error: No EMPTY PINS")
          