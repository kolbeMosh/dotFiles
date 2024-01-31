import BinaryGate

class AndGate(BinaryGate):
    def __init__(self, lbl):
        super().__init__(lbl)

    def __init__(self, lbl, pin_a, pin_b):
        super().__init__(lbl, pin_a, pin_b)

    def perform_gate_logic(self):
        a = self.get_pin_a
        b = self.get_pin_b
        if a == 1 and b == 1:
            return 1
        else:
            return 0