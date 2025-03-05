CREATE TABLE vendedor (
  id_vendedor SERIAL PRIMARY KEY,
  nome_vendedor VARCHAR(50) NOT NULL,
  CPF VARCHAR(11) NOT NULL,
  RG VARCHAR(15) NOT NULL,
  itens_de_venda VARCHAR(30) NOT NULL,
  valor DECIMAL(10, 2) NOT NULL,
  porcentagem_sobre_venda NUMERIC(5, 2) NOT NULL,
  alcancou_a_meta BOOLEAN
  )
  
  INSERT INTO vendedor
  	(id_vendedor, nome_vendedor, CPF, RG, itens_de_venda, valor, porcentagem_sobre_venda, alcancou_a_meta)
  VALUES
  	(1, 'Junior Silva', 31258986885, 398586397, 'piano de calda', 30000, 3, TRUE)
  
    INSERT INTO vendedor
  	(id_vendedor, nome_vendedor, CPF, RG, itens_de_venda, valor, porcentagem_sobre_venda, alcancou_a_meta)
  VALUES
  	(2, 'Rafael Santos', 47436547533, 584763238, 'violão', 219.99, 1.5, FALSE)
    
      INSERT INTO vendedor
  	(id_vendedor, nome_vendedor, CPF, RG, itens_de_venda, valor, porcentagem_sobre_venda, alcancou_a_meta)
  VALUES
  	(3, 'Cristiano Santos', 51478623800, 007845326, 'violino', 10000, 3, TRUE)
    
  SELECT * FROM vendedor
  
  INSERT INTO instrumentos
  	(nome, preco, em_promocao)
  VALUES
  	('violão', 219.99, FALSE)
    
SELECT * FROM instrumentos

  INSERT INTO instrumentos
  	(nome, preco, em_promocao)
  VALUES
  	('piano de cauda', 30000, TRUE)

  INSERT INTO instrumentos
  	(nome, preco, em_promocao)
  VALUES
  	('violino', 10000, TRUE)