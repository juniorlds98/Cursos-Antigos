def achar_elemento(arr):
    elem = (input('Digite o nome que você quer procurar:' ))
    achou = False

    for i in range(len(arr)):
        if arr [i] == elem:
            achou = True
    if achou == False:
        print('Não achamos o nome: ' + elem)
    else:
        print('Achamos o nome:' + elem)

nomes = ['Rafael', 'Luan', 'João', 'Marcela', 'Julia']
achar_elemento(nomes)


#com repetição

def achar_elemento(arr):
    elem = (input('Digite o nome que você quer procurar:' ))
    achou = False
    frase = ''

    while(achou ==False):
        print('Qual o nome deseja procurar?')
        elem = input()
    
    for i in range(len(arr)):
        if arr [i] == elem:
            achou = True
            indice = i
        if(achou == False):
            frase = (' Não Encontramos um nome: ' + elem + ' no índice: ' + str(indice))
            print(frase)
        else:
            frase = ('Encontramos um nome: ' + elem + ' no indice: ' + str(indice)) 
achar_elemento(nomes)