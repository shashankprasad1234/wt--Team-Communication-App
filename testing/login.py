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
driver.close()

print("Login Test Successful!")