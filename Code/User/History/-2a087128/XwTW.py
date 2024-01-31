class Fraction():
    def __init__(self, top, bottom):
        self.num = top
        self.den = bottom

    def __str__(self):
        return f"{self.num}/{self.den}"
    
    def __add__(self, other_fraction):
        def gcd(m, n):
            while m % n != 0:
                m, n = n, m % n
            return n
        
        new_num = self.num * other_fraction.den + \
                    self.den * other_fraction.num
        new_den = self.den * other_fraction.den

        cmmn = gcd(new_num, new_den)
        

        return Fraction(new_num // cmmn, new_den // cmmn)
    
    def __eq__(self, other_fraction):
        first_num = self.num * other_fraction.den
        second_num = other_fraction * self.den

        return first_num == second_num
    a