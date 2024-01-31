from Fraction import Fraction
import random
import sys

NUM_FRACTIONS = 5
L = []

# print(Fraction(3, 5))

for i in range(NUM_FRACTIONS):
    try:
        L.append(Fraction(int(random.randrange(start=100)), int(random.randrange(start=100))))
    except:
        e = sys.exc_info()[0]
        print(f"YOU MESSED UP {e}")

print(L)
