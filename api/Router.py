from urllib import response
from fastapi import APIRouter
import Data
router = APIRouter()

@router.get('/')
def test():
    return 'API is running'


@router.get('/data')
def getData():
    print("Retornado dados")
    print("Resposta")
    x,y = getData()
    return {"x":x,"y":y}


@router.get('/furrier')
def getData():
    print("Retornado dados")
    print("Resposta")
    x,y = Data.FurrierTransform()
    return {"x":x,"y":y}

@router.get('/wavelet')
def getData():
    print("Retornado dados")
    print("Resposta")
    x,y =  Data.WaveletTrasnform()
    return {"x":x,"y":y}
    