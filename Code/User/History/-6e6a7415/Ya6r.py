class LogicGate:
    def __init__(self, lbl):
        self.label = lbl
        self.output = None
    def get_label(self):
        return self.label