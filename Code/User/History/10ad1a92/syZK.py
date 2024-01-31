import BinaryGate

class AndGate(BinaryGate):
    def __init__(self, lbl):
        super().__init__(lbl)

    def __init__(self, lbl, pin_a, pin_b):
        super().__init__(lbl, pin_a, pin_b)