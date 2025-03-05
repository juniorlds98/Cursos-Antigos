def calculadoraimc(peso_pessoa, altura_pessoa):
    valor_IMC = peso_pessoa / altura_pessoa**2
    
    if valor_IMC <= 18.5: 
        return ("Magreza"), valor_IMC

    elif 18.5 <= valor_IMC <= 24.9: 
        return ("Saudavel"), valor_IMC

    elif 25 <= valor_IMC <= 29.9: 
        return ("Sobrepeso"), valor_IMC 

    elif 30 <= valor_IMC <= 34.9: 
        return ("Obesidade severa grau 1"), valor_IMC

    elif 35 <= valor_IMC <= 39.9: 
        return ("Obesidade severa grau 2"), valor_IMC

    else: 
        return ("Obesidade morbida grau 3"), valor_IMC

peso_pessoa = float(input('Digite seu peso em quilogramas: '))

altura_pessoa = float(input('Digite a sua altura: '))

classificacao, valor_IMC = calculadoraimc(peso_pessoa,altura_pessoa)

print('Sua classificação de IMC é: ', classificacao)
print('O valor do IMC é: {:.2f}'.format(valor_IMC))
