CREATE OR REPLACE FUNCTION calcular_clientes()
  RETURN NUMBER
IS
  total_clientes NUMBER;
BEGIN
 
  SELECT COUNT(*) INTO total_clientes
  FROM cadastro_clientes
  WHERE TRUNC(data_cadastro) = TRUNC(SYSDATE); 

  RETURN total_clientes;
END calcular_clientes;