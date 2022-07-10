import numpy as np
def getData():
    #atualizar a cada chamada na outra api  
    y,x= np.loadtxt('gait.txt',delimiter =',', usecols =(0, 1),unpack = True)
    return list(x),list(y)

def FourierTransform():
    #atualizar a cada chamada na outra api  
    x,y= getData()
    result = x,y
    return result

def WaveletTrasnform():
    #atualizar a cada chamada na outra api  
    x,y= getData()
    result = x,y
    return result
