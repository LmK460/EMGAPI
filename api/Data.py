import random 

def data():
    #atualizar a cada chamada na outra api  
    result = [ {"time": random.randint(1,100), "emg": random.random()} for _ in range(1,1000)]
    return result
