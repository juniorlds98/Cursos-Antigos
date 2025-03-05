def calculadora (num1, num2, operacao):    
    if operacao == 1:
        return num1 + num2 
            
    elif operacao == 2:
        return num1 - num2
            
    elif operacao == 3:
        return num1 * num2
            
    elif operacao == 4:
        if num2 != 0:
            return num1 / num2
        else:
            print('Erro: Divisão por zero não permitida.')
            return 0
    else:
        print('Operação invalida. Escolha um número entre 1 e 4.')
        return 0
    
while True:
    try:
        num1 = int(input('digite o primeiro número (ou o zero para sair): '))
        if num1 == 0:
            print('Programa encerrado')
            break

        num2 = int(input('digite o segundo número: '))  
        operacao = int(input('Escolha a operação (1 para soma, 2 para subtração, 3 para multiplicação e 4 para divisão): '))

        if 1 <= operacao <= 4:
            calculadora_resultado = calculadora(num1, num2, operacao)
            print('O resultado é:', calculadora_resultado)
        else: 
            print('Operação invalida. Escolha um número entre 1 e 4.')
    except ValueError:
        print('Entrada invalida. Por favor, insira um número inteiro de 1 a 4.')