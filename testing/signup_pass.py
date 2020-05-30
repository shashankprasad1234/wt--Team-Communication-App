from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
import time 

driver = webdriver.Chrome(executable_path="/home/gaupeng/Downloads/chromedriver")
driver.maximize_window()

driver.get("localhost:8100")

signup_btn = driver.find_element_by_id("signup")
signup_btn.click()

time.sleep(4)
uname = driver.find_element_by_name("ion-input-2")
uname.send_keys("SeleniumBot")

email = driver.find_element_by_name("ion-input-3")
email.send_keys("seleniumbot@test.com")

pwd = driver.find_element_by_name("ion-input-4")
pwd.send_keys("abcd1234")

conf_pwd = driver.find_element_by_name("ion-input-5")
conf_pwd.send_keys("abcd1234")

btn_list = driver.find_elements_by_tag_name("ion-button")
signup_btn = btn_list[3]
signup_btn.click()

time.sleep(6)
fname = driver.find_element_by_name("ion-input-9")
fname.send_keys("Selenium")

lname = driver.find_element_by_name("ion-input-10")
lname.send_keys("Bot")

select_btn = driver.find_elements_by_tag_name("ion-select")
select_btn[1].click()

sel_optns = driver.find_elements_by_class_name("alert-radio-label")
sel_optns[2].click()

ok_btn = driver.find_elements_by_class_name("alert-button")[1].click()

select_btn[2].click()
time.sleep(1)

skills = driver.find_elements_by_class_name("alert-checkbox-label")
for ind in range(5):
    skills[ind].click()
ok_btn = driver.find_elements_by_class_name("alert-button")[1].click()

time.sleep(1)
comp_signup_btn = driver.find_elements_by_tag_name("ion-button")[8].click()

time.sleep(5)
driver.close()

print("Signup Pass Test Successful!")