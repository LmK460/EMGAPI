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


@router.get('/fourier')
def getFourier():
    print("Retornado dados")
    print("Resposta")
    x,y = Data.FourierTransform()
    return {"x":x,"y":y}

@router.get('/wavelet')
def getWavelet():
    print("Retornado dados")
    print("Resposta")
    x,y =  Data.WaveletTrasnform()
    return {"x":x,"y":y}
    