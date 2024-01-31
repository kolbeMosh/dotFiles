import LogicGate

class UnaryGate(LogicGate):
    def __init__(self, lbl):
        super.__init__(self, lbl)
        self.pin = None

    def __init__(self, lbl, pin):
        super.__init__(self, lbl)
        self.pin = pin
    
    def get_pin(self):
        return int(input(f"Enter pin input for gate \
                         {self.get_label()}: "))
    