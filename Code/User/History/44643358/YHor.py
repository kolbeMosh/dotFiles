import Saint

class FeastOfSaints(Saint):
    def __init__(self, listOfSaints: [(str, (float, float))]):
        self._listOfSaints = []
        self._schedule = []
        for saint in listOfSaints:
            self._listOfSaints.append(Saint(saint[0], saint[1]))

        for saint in self._listOfSaints:
            self._schedule.append(saint.getStartTime)
            self._schedule.append(saint.getStartTime)
    
    def __mergesort(self, schedule):
        def merge(l1, l2):
            if l1 == []:
                return l2
            elif l2 == []:
                return l1
            elif l1[0][0] < l2[0][0]:
                return [l1[0]] + merge(l1[1:], l2)
            else:
                return [l2[0]] + merge(l1, l2[1:])
        
        def split(L):
            if L == []:
                return ([], [])
            elif len(L) == 1:
                return (L, [])
            else:
                (left, right) = split(L[2:])
                return ([L[0]] + left, [L[1]] + right)
    
        if schedule == []:
            return schedule
        elif len(schedule) == 1:
            return schedule
        else:
            (left, right) = self.split(self._listOfSaints)

        sl = self.mergesort(left)
        sr = self.mergesort(right)

        return self.merge(sl, sr)
        

    def selectTime(self) -> (float,int):
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
        return (max[1], max[0])
    
    def 