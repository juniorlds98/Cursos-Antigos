CREATE TABLE curso (
  id_curso SERIAL PRIMARY KEY,
  nome_curso VARCHAR(50) NOT NULL,
  nome_professor VARCHAR(50) NOT NULL
);

CREATE TABLE locais (
    id_local SERIAL PRIMARY KEY,
    nome_local VARCHAR(50) NOT NULL,
    nome_rua VARCHAR(50) NOT NULL,
    curso_id INT,
    CONSTRAINT fk_curso_id FOREIGN KEY (curso_id) REFERENCES curso (id_curso)
);
    
insert INTO curso(nome_curso, nome_professor) VALUES('UX Unicórnio', 'Leandro Rezende');
insert INTO curso(nome_curso, nome_professor) VALUES('EBAC', 'Mariana Rios');
insert INTO curso(nome_curso, nome_professor) VALUES('UX Descomplica', 'Junior Silva');

SELECT * FROM curso
SELECT * FROM locais

insert INTO locais(nome_local, nome_rua, curso_id) VALUES('Polo Paulista', 'Avenida Paulista', 1);
insert INTO locais(nome_local, nome_rua, curso_id) VALUES('Polo São Bernardo do Campo', 'Rua Marechal Deodoro', 2);
insert INTO locais(nome_local, nome_rua, curso_id) VALUES('Polo Morumbi', 'Avenida Professor Francisco Morato', 3);
insert INTO locais(nome_local, nome_rua, curso_id) VALUES('Polo Goiânia', 'Avenida José Francisco Buhrer', NULL);


--Inner Join
SELECT nome_curso, nome_local 
FROM locais 
INNER JOIN curso ON curso.id_curso = locais.curso_id;

--Left Join

SELECT nome_curso, nome_local
FROM locais
LEFT JOIN curso ON curso.id_curso = locais.curso_id;

--Right Join

select nome_curso, nome_local
FROM locais
RIGHT JOIN curso on curso.id_curso = locais.curso_id;

--Full Join

SELECT *
FROM curso
FULL OUTER JOIN locais ON curso.id_curso = locais.curso_id;

CREATE OR REPLACE FUNCTION insert_curso()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.nome_curso IS NULL THEN
        INSERT INTO lembrete(nome_local)
        VALUES(NEW.id, CONCAT('Oi ', NEW.nome_curso, ', atualize seu local de curso.'));
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_insert_curso
AFTER INSERT ON curso 
FOR EACH ROW
EXECUTE FUNCTION insert_curso();