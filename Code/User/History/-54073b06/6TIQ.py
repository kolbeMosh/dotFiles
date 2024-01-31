import LogicGate

class UnaryGate(LogicGate):
    def __init__(self, lbl):
        super.__init__(self, lbl)
        self.pin = None
    