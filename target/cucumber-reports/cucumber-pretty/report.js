$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/TrianguloApp/TrianguloApp.feature");
formatter.feature({
  "name": "Clasificacion del tipo de triangulo por longitud de los lados",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Triangulo Equilatero",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Los lados tienen los siguientes valores",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "lado1",
        "\u003cvalor1\u003e"
      ]
    },
    {
      "cells": [
        "lado2",
        "\u003cvalor2\u003e"
      ]
    },
    {
      "cells": [
        "lado3",
        "\u003cvalor3\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "Se pulsa calcular",
  "keyword": "When "
});
formatter.step({
  "name": "El mensaje es \"O triângulo é Equilátero\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "valor1",
        "valor2",
        "valor3"
      ]
    },
    {
      "cells": [
        "90",
        "90",
        "90"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "La aplicacion de triangulo esta corriendo",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.laAplicacionDeTrianguloEstaCorriendo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Triangulo Equilatero",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Los lados tienen los siguientes valores",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.losLadosTienenLosSiguientesValores(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Se pulsa calcular",
  "keyword": "When "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.sePulsaCalcular()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El mensaje es \"O triângulo é Equilátero\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.elMensajeEs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Triangulo isosceles",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Los lados tienen los siguientes valores",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "lado1",
        "\u003cvalor1\u003e"
      ]
    },
    {
      "cells": [
        "lado2",
        "\u003cvalor2\u003e"
      ]
    },
    {
      "cells": [
        "lado3",
        "\u003cvalor3\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "Se pulsa calcular",
  "keyword": "When "
});
formatter.step({
  "name": "El mensaje es \"O triângulo é Isósceles\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "valor1",
        "valor2",
        "valor3"
      ]
    },
    {
      "cells": [
        "80",
        "90",
        "90"
      ]
    },
    {
      "cells": [
        "99",
        "100",
        "100"
      ]
    },
    {
      "cells": [
        "999",
        "998",
        "998"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "La aplicacion de triangulo esta corriendo",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.laAplicacionDeTrianguloEstaCorriendo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Triangulo isosceles",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Los lados tienen los siguientes valores",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.losLadosTienenLosSiguientesValores(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Se pulsa calcular",
  "keyword": "When "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.sePulsaCalcular()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El mensaje es \"O triângulo é Isósceles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.elMensajeEs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "La aplicacion de triangulo esta corriendo",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.laAplicacionDeTrianguloEstaCorriendo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Triangulo isosceles",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Los lados tienen los siguientes valores",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.losLadosTienenLosSiguientesValores(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Se pulsa calcular",
  "keyword": "When "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.sePulsaCalcular()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El mensaje es \"O triângulo é Isósceles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.elMensajeEs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "La aplicacion de triangulo esta corriendo",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.laAplicacionDeTrianguloEstaCorriendo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Triangulo isosceles",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Los lados tienen los siguientes valores",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.losLadosTienenLosSiguientesValores(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Se pulsa calcular",
  "keyword": "When "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.sePulsaCalcular()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El mensaje es \"O triângulo é Isósceles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.elMensajeEs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Triangulo escaleno",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Los lados tienen los siguientes valores",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "lado1",
        "\u003cvalor1\u003e"
      ]
    },
    {
      "cells": [
        "lado2",
        "\u003cvalor2\u003e"
      ]
    },
    {
      "cells": [
        "lado3",
        "\u003cvalor3\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "Se pulsa calcular",
  "keyword": "When "
});
formatter.step({
  "name": "El mensaje es \"O triângulo é Escaleno\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "valor1",
        "valor2",
        "valor3"
      ]
    },
    {
      "cells": [
        "80",
        "70",
        "90"
      ]
    },
    {
      "cells": [
        "1",
        "100",
        "1000"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "La aplicacion de triangulo esta corriendo",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.laAplicacionDeTrianguloEstaCorriendo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Triangulo escaleno",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Los lados tienen los siguientes valores",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.losLadosTienenLosSiguientesValores(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Se pulsa calcular",
  "keyword": "When "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.sePulsaCalcular()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El mensaje es \"O triângulo é Escaleno\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.elMensajeEs(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy. Proxy error: Could not proxy command to remote server. Original error: Error: socket hang up\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027C20168\u0027, ip: \u0027192.168.100.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\Ahernandez\\Documen..., appPackage: com.eliasnogueira.trianguloapp, automationName: UiAutomator2, databaseEnabled: false, desired: {app: C:\\Users\\Ahernandez\\Documen..., automationName: UiAutomator2, deviceName: emulator-5556, platformName: android, udid: emulator-5556}, deviceApiLevel: 28, deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5556, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5556, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 9, statBarHeight: 63, takesScreenshot: true, udid: emulator-5556, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 9cbec427-c10b-48c5-b3fc-93620db37a82\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:166)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.appium.java_client.pagefactory.ElementInterceptor.getObject(ElementInterceptor.java:40)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.getText(\u003cgenerated\u003e)\r\n\tat com.trianguloApp.pages.HomePage.getTextResultado(HomePage.java:68)\r\n\tat com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.elMensajeEs(TrianguloAppStepDefinition.java:42)\r\n\tat ✽.El mensaje es \"O triângulo é Escaleno\"(classpath:features/TrianguloApp/TrianguloApp.feature:39)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "La aplicacion de triangulo esta corriendo",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.laAplicacionDeTrianguloEstaCorriendo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Triangulo escaleno",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Los lados tienen los siguientes valores",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.losLadosTienenLosSiguientesValores(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Se pulsa calcular",
  "keyword": "When "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.sePulsaCalcular()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El mensaje es \"O triângulo é Escaleno\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trianguloApp.StepDefinition.TrianguloAppStepDefinition.elMensajeEs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});