##Triangulo App Pruebas Automaticas
En este proyecto encontraras las pruebas basicas para una aplicacion
 que imprime el tipo de triangulo que es por la longitud de sus lados

### Que necesitas
1. Java JDK (JAVA_HOME_ y _PATH_ configurado)
2. IDE (Yo utilice Intellij y gradle)
3. Android SDK 
4. Android AVD created
5. Appium instalado por npm

Configuracio
-------------
En el archivo testng.xml deveras configurar los dispositovs en los cuales se ejecutaran las pruebas
```
    <test name="Virtual Device 1">
        <parameter name="deviceName" value="emulator-5554" />
        <parameter name="platformName" value="Android" />
        <parameter name="automationName" value="UiAutomator2" />
        <parameter name="appiumUrl" value="http://localhost:4729/wd/hub" />
        <classes>
            <class name="CucumberRunner" />
        </classes>
    </test>
```

Ejecucion
----------------------
####1. Appium
Ejecuto appium con el siguiente comando definiendo el puerto que configure en el xml para el dispositivo, en la carpeta ServerConfig hay ejemplos.

    appium --address 127.0.0.1 --port 4729 -bp 8189 --session-override &

####2.Ejecucion proyecto
El proyecto esta configurado para que se ejecute con un comando de gradle


