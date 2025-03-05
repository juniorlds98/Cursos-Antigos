def numeros_pares():
    print('Escreva um número par: ')
    numero_valido = False
    while not numero_valido:
        try:
            num_escolhido = int(input())
            if num_escolhido % 2 != 0:
                print('Você não digitou um número par, escolha outro número')
            else:
                print('Parabéns, você escolheu o seguinte número par: ', num_escolhido)
                numero_valido = True
        except ValueError:
            print('Precisa digitar um número inteiro')
numeros_pares()
