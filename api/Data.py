import random
import numpy as np
import matplotlib.pyplot as plt
def getdata():
    #atualizar a cada chamada na outra api  
    y,x= np.loadtxt('gait.txt',delimiter =',', usecols =(0, 1),unpack = True)
    return list(x),list(y)

def FurrierTransform():
    #atualizar a cada chamada na outra api  
    x,y= getdata()
    result = x,y
    return result

def WaveletTrasnform():
    #atualizar a cada chamada na outra api  
    x,y= getdata()
    result = x,y
    return result
