import numpy as np

def getData():
    #atualizar a cada chamada na outra api  
    y,x= np.loadtxt('gait.txt',delimiter =',', usecols =(0, 1),unpack = True)
    result = [{'x': x[i] , 'y': y[i]} for i in range(len(x))]
    
    return result
    
def FurrierTransform():
    #atualizar a cada chamada na outra api  
    result = getData()
    return result

def WaveletTransform():
    #atualizar a cada chamada na outra api  
    result = getData()
    return result
