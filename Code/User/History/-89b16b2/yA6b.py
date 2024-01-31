q0 = 0
q1 = 1
q2 = 2
q3 = 3
state = 0

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
      try:
        state = delta[state][(ord(c)-ord('0'))]
      except Exception as e:
            state = q3 
   if state==q0:
      print(s)
   s = input()