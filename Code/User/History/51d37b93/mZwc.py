class Schedule:
    def __init__(self, availTime):
        self._sTime = (availTime[0], "start")
        self._eTime = (availTime[1], "end")
    
    def getStartTime(self):
        return self._sTime
    
    def getEndTime(self):
        return self._eTime