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
    return Data.data()
