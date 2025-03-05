#arrey é uma lista de itens que você coloca para armazenar informações da sua escolha
#estrutura de dados chamada de 'lista'
#Listas são coleções ordenadas e mutáveis
#Cada elemento dentro dessa lista pode ser qualquer tipo de dado
#É uma sequência de valores que podem ser modificados

minha_lista = [1, 2, 3, 4, 5]

#Os elementos do array pode ser acessados pelo índices - em python o indice sempre inicia em 0

meu_array = array('i', [1, 2, 3, 4, 5])

#função que determina se um array tem ou não um certo elemento

def achar_elemento(elem, arr):
    achou = False

    for i in range(len(arr)):
        if arr [i] ==elem:
            achou = True
    if(achou == False):
        print('Não achamos o nome: ' + elem)
    else:
        print('Achamos o nome:' + elem)
nomes = ['Rafael', 'Luan', 'João', 'Marcela', 'Julia']
achar_elemento('André', nomes)