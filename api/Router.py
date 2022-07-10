from urllib import response
from fastapi import APIRouter
import Data
router = APIRouter()

@router.get('/')
def test():
    return 'API is running'


@router.get('/data')
def getOriginalData():
    print("Retornado dados")
    print("Resposta")
    x,y = Data.getData()
    return {"x":x,"y":y}


@router.get('/furrier')
def getFourrier():
    print("Retornado dados")
    print("Resposta")
    x,y = Data.FurrierTransform()
    return {"x":x,"y":y}

@router.get('/wavelet')
def getWavelet():
    print("Retornado dados")
    print("Resposta")
    x,y =  Data.WaveletTrasnform()
    return {"x":x,"y":y}
    