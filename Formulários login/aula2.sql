-- Criação das tabelas

CREATE TABLE artista (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(20) UNIQUE
);

CREATE TABLE musica (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(30) NOT NULL
);

Create TABLE gravacao (
  id SERIAL PRIMARY KEY,
  duracao_seg INT NOT NULL
);

CREATE TABLE album (
  id_album SERIAL PRIMARY KEY,
  nome_album VARCHAR(60) UNIQUE
);

-- Exclusão das tabelas

DROP TABLE demo;
drop table aluno;
DROP TABLE instrumentos;
drop TABLE vendedor;
drop table gravacao;
drop table pessoa;

-- Alteração das tabelas

ALTER TABLE musica ADD COLUMN duracao_seg INT NOT NULL;

-- Inserção de valores

INSERT INTO artista (nome) VALUES
	('Djavan'),
    ('Os mutantes'),
    ('Pitty');
 
INSERT INTO album (nome_album) VALUES
  ('Djavan'),
  ('Album D'),
  ('Adimirável Chip Novo'),
  ('A Divina Comédia ou Ando Meio Desligado'); 
-- Projeção de valores

SELECT * FROM artista;

INSERT INTO musica (nome, duracao_seg) VALUES
	('Oceano', 300),
    ('Se...', 268),
    ('Teto de vidro', 254),
    ('Equalize', 360),
    ('Minha menina', 285),
    ('Ando meio desligado', 330);
    

SELECT * FROM musica;
SELECT * FROM album;
-- relacionamentos
alter TABLE musica
add COLUMN fk_id_artista INT,
ADD CONSTRAINT fk_artista FOREIGN key( fk_id_artista) REFERENCES artista(id)

ALTER TABLE musica 
ADD COLUMN id_album INT,
ADD CONSTRAINT fk_album_id FOREIGN KEY (id_album) REFERENCES album(id_album);

SELECT * FROM musica 

UPDATE musica
SET fk_id_artista = 1
where nome = 'Se...';

update musica
SET fk_id_artista = 1
WHERE nome = 'Oceano';

update musica
SET fk_id_artista = 2
WHERE nome = 'Ando meio desligado';

update musica
SET fk_id_artista = 2
WHERE nome = 'Minha menina';

update musica
SET fk_id_artista = 3
WHERE nome = 'Teto de vidro';

update musica
SET fk_id_artista = 3
WHERE nome = 'Equalize';

UPDATE musica
SET	id_album= 1
WHERE nome = 'Se...';

UPDATE musica
SET	id_album= 2
WHERE nome = 'Oceano';

UPDATE musica
SET	id_album= 3
WHERE nome = 'Teto de vidro';

UPDATE musica
SET	id_album= 3
WHERE nome = 'Equalize';

UPDATE musica
SET	id_album= 4
WHERE nome = 'Ando meio desligado';

UPDATE musica
SET	id_album= 4
WHERE nome = 'Minha menina';