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