class NotGate(UnaryGate):
   def perform_gate_logic(self) -> None:
      if (self.pin == None):
         self.set_pin()
      self.set_output(not self.get_pin())