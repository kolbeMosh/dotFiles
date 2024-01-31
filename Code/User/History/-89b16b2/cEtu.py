q0 = 0
q1 = 1
q2 = 2
q3 = 3
state = 0

def delta(s: int, c: chr) -> int:
   if s == q0:
      if c == '0':
         return q0
      elif c == '1':
         return q1
      else:
         return q3
   elif s == q1:
      if c == '0':
         return q2
      elif c == '1':
         return q0
      else:
         return q3
   elif s == q2:
      if c == '0':
         return q1
      elif c == '1':
         return q2
      else:
         return q3
   else:
      return q3

s = input()

while s != "-1":
   state = q0
   for c in s:
      state = delta(state, c)
   if state==q0:
      print(s)
   s = input()