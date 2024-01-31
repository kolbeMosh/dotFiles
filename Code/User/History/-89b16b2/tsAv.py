q0 = 0
q1 = 1
q2 = 2
q3 = 3
state = 0

def delta(s: int, c: chr) -> int:
   delta = [
      [q0, q1],
      [q2, q0],
      [q1, q2],
      [q3, q3]
   ]

s = input()

while s != "-1":
   state = q0
   for c in s:
      state = delta(state, c)
   if state==q0:
      print(s)
   s = input()