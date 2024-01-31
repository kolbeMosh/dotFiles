import UnaryGate

class NotGate(UnaryGate):
    # def __init__(self, lbl):
        # super().__init__(lbl)

    def __init__(self, lbl, pin=None):
        super().__init__(lbl, pin)

    def perform_gate_logic(self):
        return ({True: 0, False: 1}[self.get_pin() == 1]())