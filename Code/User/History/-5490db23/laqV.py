class HalfAdder(BinaryGate):
   def __init__(self, lbl: str):
      super().__init__(lbl)
      self.org = OrGate("Or Gate")
      self.ag1 = AndGate("And Gate 1")
      self.ag2 = AndGate("And Gate 2")
      self.notg = NotGate("Not Gate")