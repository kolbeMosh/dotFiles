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