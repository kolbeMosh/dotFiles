class Mod3:
   # Constants q0 through q3 represent states, and
   # an int holds the current state code.
   def __init__(self):
      self.q0 = 0
      self.q1 = 1
      self.q2 = 2
      self.q3 = 3
      self.state = 0

   # The transition function.
   def delta(self, s: int, c: chr) -> int:
      if s == self.q0:
         if c == '0':
            return self.q0
         elif c == '1':
            return self.q1
         else:
            return self.q3
      elif s == self.q1:
         if c == '0':
            return self.q2
         elif c == '1':
            return self.q0
         else:
            return self.q3
      elif s == self.q2:
         if c == '0':
            return self.q1
         elif c == '1':
            return self.q2
         else:
            return self.q3
      else:
         return self.q3

  # Reset the current state to the start state.
   def reset(self):
      self.state = self.q0

   # Make one transition on each char in the given string.
   def process(self,s: str) -> None:
      for c in s:
         self.state = self.delta(self.state, c)

   # Test whether the DFA accepted the string.
   def accepted(self) -> bool:
      return self.state==self.q0
 
## Application

"""
 * An application to demonstrate the Mod3 class by
 * using it to filter the standard input stream. Those
 * lines that are accepted by Mod3 are echoed to the
 * standard output.
"""

m = Mod3() # the DFA

s = input()
#print(s)

while s != "-1":
   m.reset()
   m.process(s)
   if m.accepted():
      print(s)
   s = input()