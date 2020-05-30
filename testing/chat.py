from selenium import webdriver
import time 

driver = webdriver.Chrome(executable_path="/home/gaupeng/Downloads/chromedriver")
driver.maximize_window()

driver.get("localhost:8100")
time.sleep(2)

email = driver.find_element_by_name("ion-input-0")
email.send_keys("seleniumbot@test.com")

pwd = driver.find_element_by_name("ion-input-1")
pwd.send_keys("abcd1234")

login_btn = driver.find_element_by_id("login")
login_btn.click()
time.sleep(5)

menu_btn = driver.find_elements_by_tag_name("ion-menu-button")
menu_btn[0].click()
time.sleep(1)

projects = driver.find_elements_by_tag_name("ion-item")[3].click()
time.sleep(1)

ion_btns = driver.find_elements_by_tag_name("ion-button")
ion_btns[3].click()
time.sleep(2)

chat_inp = driver.find_element_by_name("ion-input-5")
chat_inp.send_keys("Hi! I am a Selenium Bot!")
time.sleep(1)
ion_btns = driver.find_elements_by_tag_name("ion-button")
ion_btns[5].click()

time.sleep(2)
chat_inp.send_keys("list members")
time.sleep(1)
ion_btns[5].click()

time.sleep(5)
driver.close()

print("Chat Successful!")