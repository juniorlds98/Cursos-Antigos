def mostrarNumero():
  print('Escreva um número menor que 100')
  numero_valido = False
  while not numero_valido:
    try:
      num = int(input())
      if num < 0:
        print('Erro. O número precisa ser maior ou igual a 0')
      elif num > 100:
        print('O número precisa ser menor ou igual a 100')
      else: 
        print('Boa, você escolheu o número:', num)
        numero_valido = True
    except ValueError:
      print('Precisa digitar um número inteiro')
    
def pedirNumeroPar():
  numero_valido = False
  while not numero_valido:
    try:
      print('Escolha um outro número')
      num = int(input())
      if (num % 2 != 0):
        print('O número precisa ser par')
      else:
        print('Boa, você escolheu o número par')
        numero_valido = True
    except ValueError:
        print('Precisa digitar um número inteiro')

mostrarNumero()
pedirNumeroPar()


def IMC (peso % altura²):
    IMC = (peso % altura²)
    return IMC
    resultado = IMC (75.50, 1.78)
    print(resultado)