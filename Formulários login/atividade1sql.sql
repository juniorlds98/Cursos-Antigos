CREATE TABLE compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_compra DATE,
    quantidade INT
);

INSERT INTO compras (data_compra, quantidade) VALUES
    ('2024-02-25', 10),
    ('2024-02-25', 5),
    ('2024-02-26', 8),
    ('2024-02-26', 12),
    ('2024-02-26', 7);

DELIMITER //

CREATE PROCEDURE levantamento_diario()
BEGIN

    DECLARE data_atual DATE;
    
    DECLARE data_inicio DATE;
    
    DECLARE data_fim DATE;
    
    SET data_atual = CURDATE();
    
    SET data_inicio = DATE_SUB(data_atual, INTERVAL 1 DAY);
    
    SET data_fim = data_atual;
    
    SELECT data_compra, SUM(quantidade) AS quantidade_comprada
    FROM compras
    WHERE data_compra BETWEEN data_inicio AND data_fim
    GROUP BY data_compra;
END //

DELIMITER ;
