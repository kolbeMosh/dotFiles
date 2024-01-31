import UnaryGate

class NotGate(UnaryGate):
    def __init__(self, lbl):
        super().__init__(lbl)

    def __init__(self, lbl, pin):
        super().__init__(lbl, pin)