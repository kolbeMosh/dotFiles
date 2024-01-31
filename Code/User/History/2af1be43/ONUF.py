import Schedule

class Saint(Schedule):
    def __init__(self, name: str, availTime: (float, float)):
        super().__init__(availTime)
        self._name = name
        
    def getName(self):
        return self._name
    
    def __str__(self):
        return "Saint: {0:<16} {1:>9}".format(self.getName(), f"{self.get}-{}")