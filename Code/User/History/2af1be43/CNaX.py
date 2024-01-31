import Schedule

class Saint(Schedule):
    def __init__(self, name: str, availTime: (float, float)):
        super().__init__(availTime)
        self._name = name
        
    