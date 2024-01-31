from bs4 import BeautifulSoup
import requests as rq


# ZIP code for the area we want to get data from
ZIP = '06905'

URL = f'https://www.zillow.com/homes/{ZIP}_rb/'

# Gets the Carousel page for the listings in the area
listings = rq.get(URL)

https://www.zillow.com/newtown-ct-06470/sold/2_p/?searchQueryState=%7B%22pagination%22%3A%7B%22currentPage%22%3A2%7D%2C%22isMapVisible%22%3Afalse%2C%22mapBounds%22%3A%7B%22west%22%3A-73.378952%2C%22east%22%3A-73.249563%2C%22south%22%3A41.318095%2C%22north%22%3A41.472677%7D%2C%22usersSearchTerm%22%3A%2206470%22%2C%22regionSelection%22%3A%5B%7B%22regionId%22%3A60329%2C%22regionType%22%3A7%7D%5D%2C%22filterState%22%3A%7B%22sort%22%3A%7B%22value%22%3A%22globalrelevanceex%22%7D%2C%22ah%22%3A%7B%22value%22%3Atrue%7D%2C%22rs%22%3A%7B%22value%22%3Atrue%7D%2C%22fsba%22%3A%7B%22value%22%3Afalse%7D%2C%22fsbo%22%3A%7B%22value%22%3Afalse%7D%2C%22nc%22%3A%7B%22value%22%3Afalse%7D%2C%22cmsn%22%3A%7B%22value%22%3Afalse%7D%2C%22auc%22%3A%7B%22value%22%3Afalse%7D%2C%22fore%22%3A%7B%22value%22%3Afalse%7D%7D%2C%22isListVisible%22%3Atrue%7D