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

pname = driver.find_element_by_name("ion-input-2")
pname.send_keys("Selenium's Project")

team_mem = driver.find_element_by_name("ion-input-3")
team_mem.send_keys("SeleniumBot")

btns = driver.find_elements_by_tag_name("ion-button")
btns[3].click()

task = driver.find_element_by_name("ion-input-4")
task.send_keys("Finish Testing!")

slct = driver.find_elements_by_tag_name("ion-select")[0].click()
time.sleep(1)

skills = driver.find_elements_by_class_name("alert-checkbox-label")
for ind in range(5):
    skills[ind].click()
ok_btn = driver.find_elements_by_tag_name("button")[6].click()

time.sleep(1)
btns[4].click()
btns[5].click()

time.sleep(5)
driver.close()

print("Create Project Successful!")