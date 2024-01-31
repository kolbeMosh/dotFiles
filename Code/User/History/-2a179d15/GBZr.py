from bs4 import BeautifulSoup
import requests as rq


# ZIP code for the area we want to get data from
ZIP = '06905'

URL = f'https://www.zillow.com/homes/{ZIP}_rb/'

# Gets the Carousel page for the listings in the area
listings = rq.get(URL)
