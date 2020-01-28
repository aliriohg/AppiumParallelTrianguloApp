Feature: Clasificacion del tipo de triangulo por longitud de los lados

  Background:
    Given La aplicacion de triangulo esta corriendo

  Scenario Outline:Triangulo Equilatero
    Given Los lados tienen los siguientes valores
      | lado1 | <valor1> |
      | lado2 | <valor2> |
      | lado3 | <valor3> |
    When Se pulsa calcular
    Then El mensaje es "O triângulo é Equilátero"
    Examples:
      | valor1 | valor2 | valor3 |
      | 90     | 90     | 90     |
#      | 1      | 1      | 1      |
#      | 100    | 100    | 100    |


  Scenario Outline:Triangulo isosceles
    Given Los lados tienen los siguientes valores
      | lado1 | <valor1> |
      | lado2 | <valor2> |
      | lado3 | <valor3> |
    When Se pulsa calcular
    Then El mensaje es "O triângulo é Isósceles"
    Examples:
      | valor1 | valor2 | valor3 |
      | 80     | 90     | 90     |
      | 99     | 100    | 100    |
      | 999    | 998    | 998    |

  Scenario Outline:Triangulo escaleno
    Given Los lados tienen los siguientes valores
      | lado1 | <valor1> |
      | lado2 | <valor2> |
      | lado3 | <valor3> |
    When Se pulsa calcular
    Then El mensaje es "O triângulo é Escaleno"
    Examples:
      | valor1 | valor2 | valor3 |
      | 80     | 70     | 90     |
      | 1      | 100    | 1000   |

#  Scenario Outline:Triangulo escaleno
#    Given Los lados tienen los siguientes valores
#      | lado1 | <valor1> |
#      | lado2 | <valor2> |
#      | lado3 | <valor3> |
#    When Se pulsa calcular
#    Then El mensaje es "Preencha todos os campos"
#    Examples:
#      | valor1 | valor2 | valor3 |
#      | 80     | 70     |   0     |
#      | 1      |   0     | 1000   |
#      |  0      | 50     | 77     |