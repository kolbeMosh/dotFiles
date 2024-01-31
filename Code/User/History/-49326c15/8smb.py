import LogicGate

class Connector:
   def __init__(self, fgate: LogicGate, tgate: LogicGate):
      self.from_gate = fgate
      self.to_gate = tgate
      tgate.set_next_pin(self)

   def get_from(self) -> LogicGate:
      return self.from_gate
   
   def get_to(self) -> LogicGate:
      return self.to_gate
   