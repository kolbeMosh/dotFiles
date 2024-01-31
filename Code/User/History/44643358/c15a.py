import Saint

class FeastOfSaints(Saint):
    def __init__(self, listOfSaints: [(str, (float, float))]):
        self._listOfSaints = []
        for saint in listOfSaints:
            self._listOfSaints.append(Saint(saint[0], saint[1]))
    
    def __sortTimes(self):
        