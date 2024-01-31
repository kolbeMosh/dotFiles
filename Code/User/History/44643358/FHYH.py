import Saint

class FeastOfSaints(Saint):
    def __init__(self, listOfSaints: [(str, (float, float))]):
        self._listOfSaints = []
        for saint in listOfSaints:
            self._listOfSaints.append(Saint(saint[0], saint[1]))
    
    def __sortTimes(self):
        def mergesort(L):
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
        
        if L == []:
            return L
        elif len(L) == 1:
            return L
        else:
            (left, right) = split (L)

            sl = mergesort(left)
            sr = mergesort(right)

        return merge(sl, sr)