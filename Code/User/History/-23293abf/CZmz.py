import Fraction
import random

NUM_FRACTIONS = 5
L = []

for i in range(NUM_FRACTIONS):
    try:
        L[i] = Fraction(int(random.randrange(start=100)), int(random.randrange(start=100)))
    except(e):
        print(f"YOU MESSED UP {e}")

print(L)