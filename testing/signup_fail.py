from selenium import webdriver
import time 

driver = webdriver.Chrome(executable_path="/home/gaupeng/Downloads/chromedriver")
driver.maximize_window()

driver.get("localhost:8100")

signup_btn = driver.find_element_by_id("signup")
signup_btn.click()

uname = driver.find_element_by_name("ion-input-2")
uname.send_keys("SeleniumBot")

email = driver.find_element_by_name("ion-input-3")
email.send_keys("seleniumbot@test.com")

pwd = driver.find_element_by_name("ion-input-4")
pwd.send_keys("abcd1234")

conf_pwd = driver.find_element_by_name("ion-input-5")
conf_pwd.send_keys("abcd1235")

btn_list = driver.find_elements_by_tag_name("ion-button")
signup_btn = btn_list[3]
signup_btn.click()

time.sleep(2)

driver.close()

print("Signup Fail Test Successful!")
print("Failed because password mismatch")