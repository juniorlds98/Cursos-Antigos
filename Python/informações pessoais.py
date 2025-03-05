def informacoes_pessoais ():
      print('Escreva o seu nome completo: ')
      nome_valido = False
      while not nome_valido:
            nome = input()
            if nome.isdigit():
                  print('Você digitou um número. Por favor, digite algo que não seja um número.')
            elif nome == '':
                  print('Você não digitou nenhum nome. Por favor, digite um nome.')      
            else:
                  print('Seu nome é:' , nome)
                  nome_valido = True

print('Escreva o ano do seu nascimento: ')
data_nascimento = False
while not data_nascimento:
      try:
            data = int(input())
            if data < 1922 or data > 2021:
                  print('Não conseguimos calcular o ano. Por favor, digite um ano entre 1922 e 2021. ')
            else:
                  idade = 2021 - data 
                  print('Parabens, você nasceu no ano: ', data ,'e tem', idade, 'anos.')
                  data_nascimento = True   
      except ValueError:
            print('Precisa ser uma data')

informacoes_pessoais()

