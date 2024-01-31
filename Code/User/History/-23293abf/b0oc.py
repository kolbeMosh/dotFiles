from Fraction import Fraction
import random
import sys

NUM_FRACTIONS = 5
L = []

# print(Fraction(3, 5))
def head(L):
    return L[0]

def tail(L):
    return L[1:]

def summation(L):
    if L == []:
        return 0
    else:
        return head(L) + summation(tail(L))

for i in range(NUM_FRACTIONS):
    try:
        L.append(Fraction(int(random.randrange(start=100)), int(random.randrange(start=100))))
    except:
        e = sys.exc_info()[0]
        print(f"YOU MESSED UP {e}")

print("____RANDOM_FRACTIONS____\n")

for i in L:
    print(f"\t {i}")

print("\n____EQUALITY_OF_FRACTIONS____\n")

for i in range(len(L)):
    try:
        print(f"\t{L[i-1]} == {L[i]} : {L[i-1] == L[i]}")
    except:
        e = sys.exc_info()[0]
        print(f"YOU MESSED UP {e}")

print("\n____SUM_OF_FRACTIONS____\n")

for i in range(len(L)):
    try:
        print(f"\t{L[i-1]} + {L[i]} : {L[i-1] + L[i]}")
    except:
        e = sys.exc_info()[0]
        print(f"YOU MESSED UP {e}")