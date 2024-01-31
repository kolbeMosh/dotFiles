class Schedule:
    def __init__(self, availTime):
        self._sTime = (availTime[0], "start")
        self._eTime = (availTime[1], "end")
    
    def getStartTime(self):
        return self._sTime
    
    def getEndTime(self):
        return self._eTime

class Saint(Schedule):
    def __init__(self, name: str, availTime: (float, float)):
        super().__init__(availTime)
        self._name = name
        
    def getName(self):
        return self._name
    
    def __str__(self):
        return "Saint: {0:<16} {1:>9}".format(self.getName(), f"{self.getStartTime()[0]}-{self.getEndTime()[0]}")

class FeastOfSaints():
    def __init__(self, listOfSaints: [(str, (float, float))]):
        self._listOfSaints = []
        self._schedule = []
        self._bestTime = 0
        for saint in listOfSaints:
            self._listOfSaints.append(Saint(saint[0], saint[1]))
        for saint in self._listOfSaints:
            self.__addTime(saint.getStartTime()[0])
            self.__addTime(saint.getEndTime()[1])
    
    def __str__(self):
        prettyPrint = ""
        for saint in self._listOfSaints:
            prettyPrint += f"{saint}\n"
        return prettyPrint

    def __addTime(self, time: (float, str)):
        if self._schedule == []:
            self._schedule.append(time)
        for i in range(len(self._schedule)-1):
            if time < self._schedule[i]:
                self._schdule = self._schedule[:i] + [time] + self._schedule[i:]

    # def __mergesort(self):
    #     def merge(l1, l2):
    #         if l1 == []:
    #             return l2
    #         elif l2 == []:
    #             return l1
    #         elif l1[0][0] < l2[0][0]:
    #             return [l1[0]] + merge(l1[1:], l2)
    #         else:
    #             return [l2[0]] + merge(l1, l2[1:])
        
    #     def split(L):
    #         if L == []:
    #             return ([], [])
    #         elif len(L) == 1:
    #             return (L, [])
    #         else:
    #             (left, right) = split(L[2:])
    #             return ([L[0]] + left, [L[1]] + right)
    
    #     if self._schedule == []:
    #         return self._schedule
    #     elif len(self._schedule) == 1:
    #         return self._schedule
    #     else:
    #         (left, right) = split(self._schedule)

    #     sl = self.__mergesort(left)
    #     sr = self.__mergesort(right)

    #     return self.merge(sl, sr)
        

    def __selectTime(self) -> (float,int):
        max = [0,0]
        counter = 0
        for i in range(len(self._schedule)):
            if (self._schedule[i][1] == 'start'):
                counter += 1
                if counter > max[0]:
                    max[0] = counter
                    max[1] = self._schedule[i][0]
            else:
                counter -= 1
        self._bestTime = (max[1], max[0])
    
    def smarterBestTimeToAttend(self):
        if self._bestTime == 0:
            self.__selectTime()
        return self._bestTime

listOfSaints = [
    ("Maximillian Kolbe", (6.5,12.0)),
    ("Micheal", (6.0,8.0)),
    ("John Paul II", (6.5,7.0)),
    ("Gertrude", (7.0,8.0)),
    ("Therese", (7.5,10)),
    ("Augustine", (8.0,9.0)),
    ("John", (8.0,10.0)),
    ("Francis", (9.0,12.0)),
    ("Peter", (9.5,10.0)),
    ("Perpetua", (10.0,11.0)),
    ("Aquinus", (10.0,12.0)),
    ("Sebastian", (11.0,12.0))
]

myFeast = FeastOfSaints(listOfSaints)
print(myFeast)
print('\n==========================\n')
print(myFeast.smarterBestTimeToAttend())