import os
import time
os.system("clear")
n=str(input('desea instalar el thema de iconos s/n: '))
if(n=="s"):
    os.system("sudo cp -r osx /usr/share/icons/")
if(n=="n"):
    print("cerrando......")
    time.sleep(1)
    os.system("clear")
    exit()
