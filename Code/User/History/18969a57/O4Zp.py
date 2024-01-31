class LogicGate:
   def __init__(self, lbl: str):
       self.label = lbl
       self.output =  None

   def get_label(self) -> str:
      return self.label
   
   def get_output(self) -> int:
      return self.output
   
   def set_output(self, newval: int) -> None:
      self.output = self.perform_gate_logic()

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
       if self.pin_a == None:
            self.pin_a = source
       else:
          if self.pin_b == None:
             self.pin_b = source
          else:
             raise RuntimeError("Error: No EMPTY PINS")
          
class AndGate(BinaryGate):
   def __init__(self, lbl: str):
      super.__init__(lbl)
   def perform_gate_logic(self) -> None:
       if (self.pin_a != None and self.pin_b != None):
        return self.pin_a and self.pin_b
       else:
         self.set_pin_a()
         self.set_pin_b()
         return self.pin_a and self.pin_b

class OrGate(BinaryGate):
   def __init__(self, lbl: str):
      super.__init__(lbl)
  
   def perform_gate_logic(self) -> None:
      if (self.pin_a == None):
         self.set_pin_a()
      if (self.pin_b == None):
         self.set_pin_a()
      return self.pin_a or self.pin_b

class NotGate(UnaryGate):
   def perform_gate_logic(self) -> None:
      if (self.pin == None):
        self.set_pin()
      return not self.get_pin()
      
