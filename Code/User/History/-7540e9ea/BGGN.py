import UnaryGate

class NotGate(UnaryGate):
    def __init__(self, lbl):
        super().__init__(lbl)

    def __init__(self, lbl, pin):
        super().__init__(lbl, pin)

    def perform_gate_logic(self):
        x = self.get_pin()
        return ({True: 0, False: 1}[x == 1]())