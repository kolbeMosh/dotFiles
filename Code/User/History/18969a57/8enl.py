class LogicGate:
   def __init__(self, lbl: str):
       self.label = lbl
       self.output =  None

   def get_label(self) -> str:
      return self.label
   
   def get_output(self) -> int:
      return self.output
   
   def set_output(self, newval: int) -> None:
      self.output = newval

class BinaryGate(LogicGate):
   def __init__(self, lbl: str):
      super().__init__( lbl)
      self.pin_a = None
      self.pin_b = None

   def set_pin_a(self, newval: int):
      self.pin_a = newval
      
   
   def set_pin_b(self, newval: int):
      self.pin_b = newval

   def get_pin_a(self) -> int:
      if self.pin_a == None:
         self.pin_a = int(input(f"Enter pin A input for gate\
                             {self.get_label()}: "))
      return self.pin_a
      
   def get_pin_b(self) -> int:
      if self.pin_b == None:
         self.pin_b = int(input(f"Enter pin A input for gate\
                             {self.get_label()}: "))
      return self.pin_b
   
   def set_next_pin(self, source) -> None:
      if self.pin_a == None:
            self.pin_a = source
      else:
          if self.pin_b == None:
             self.pin_b = source
          else:
             raise RuntimeError("Error: No EMPTY PINS")

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
          
class AndGate(BinaryGate):
   def __init__(self, lbl: str):
      super().__init__(lbl)
   def perform_gate_logic(self) -> None:
       if (self.pin_a != None and self.pin_b != None):
        self.setout(self.pin_a and self.pin_b)
       else:
         self.set_pin_a()
         self.set_pin_b()
         self.set_output(self.pin_a and self.pin_b)

class OrGate(BinaryGate):
   def __init__(self, lbl: str):
      super().__init__(lbl)
  
   def perform_gate_logic(self) -> None:
      if (self.pin_a == None):
         self.set_pin_a()
      if (self.pin_b == None):
         self.set_pin_a()
      self.set_output(self.pin_a or self.pin_b)

class NotGate(UnaryGate):
   def perform_gate_logic(self) -> None:
      if (self.pin == None):
         self.set_pin()
      self.set_output(not self.get_pin())
      
class Connector:
   def __init__(self, fgate: LogicGate, tgate: LogicGate):
      self.from_gate = fgate
      self.to_gate = tgate
      tgate.set_next_pin(self)

   def get_from(self) -> LogicGate:
      return self.from_gate
   
   def get_to(self) -> LogicGate:
      return self.to_gate
   
class HalfAdder(BinaryGate):
   def __init__(self, lbl: str):
      super().__init__(lbl)
      self.org = OrGate("Or Gate")
      self.ag1 = AndGate("And Gate 1")
      self.ag2 = AndGate("And Gate 2")
      self.notg = NotGate("Not Gate")

   def perform_gate_logic(self) -> None:
        x = self.get_pin_a()
        y = self.get_pin_b()
        self.org.set_pin_a(x)
        self.org.set_pin_b(y)
        self.ag1.set_pin_a(x)
        self.ag1.set_pin_b(y)

        self.org.perform_gate_logic()
        self.ag1.perform_gate_logic()
        print(self.org.get_output())
        print(self.ag1.get_output())

        self.carry_bit = self.ag1.get_output()

        self.notg.set_pin(self.carry_bit)
        self.notg.perform_gate_logic()

        self.ag2.set_pin_a(self.org.get_output())
        self.ag2.set_pin_b(self.notg.get_output())

        self.ag2.perform_gate_logic()

        self.output = self.ag2.get_output()
   def get_carry_bit(self):
      return self.ag2.get_output
   
def main():
    halfaddr = HalfAdder("Half Adder Circuit")
    halfaddr.perform_gate_logic()
    print("\nSum: %d; Carry: %d\n" % (halfaddr.get_output(), halfaddr.get_carry_bit()))

main()