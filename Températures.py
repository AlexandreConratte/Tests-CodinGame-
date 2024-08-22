import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = int(input())  # the number of temperatures to analyse

x = 0   # nombre de boucle

tempClose0 = 0   # température la plus proche de 0 , initiée à 0

for i in input().split():
    # t: a temperature expressed as an integer ranging from -273 to 5526
    t = int(i)


    if x == 0 :  
        tempClose0 = t


    if abs(t)<abs(tempClose0):
        tempClose0 = t


    if abs(t) == abs(tempClose0)   and t > tempClose0 :
        tempClose0 = t

    x = x+1  
     
print(tempClose0)