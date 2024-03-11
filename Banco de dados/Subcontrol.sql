 -- Criação das entidades --

CREATE TABLE Empresa (
    id_empresa SERIAL PRIMARY KEY,
    CNPJ VARCHAR UNIQUE,
    nome_completo VARCHAR,
    logradouro VARCHAR,
    numero VARCHAR,
    cidade VARCHAR,
    UF VARCHAR,
    CEP VARCHAR,
    Pais VARCHAR
);

CREATE TABLE Tipo_usuario (
    id_tipo_usuario SERIAL PRIMARY KEY,
    tipo VARCHAR
);

CREATE TABLE Tipos_de_equipamento (
    id_tipos_equipamentos SERIAL PRIMARY KEY,
    equipamento VARCHAR
);

CREATE TABLE Usuario (
    id_usuario SERIAL PRIMARY KEY,
    id_empresa INTEGER,
    id_tipo_usuario INTEGER,
    CREA_CPF VARCHAR UNIQUE,
    nome_completo VARCHAR,
    email VARCHAR UNIQUE,
    senha VARCHAR,
    logradouro VARCHAR,
    numero VARCHAR,
    cidade VARCHAR,
    UF VARCHAR,
    CEP VARCHAR,
    Pais VARCHAR,
    FOREIGN KEY (id_empresa) REFERENCES Empresa (id_empresa),
    FOREIGN KEY (id_tipo_usuario) REFERENCES Tipo_usuario (id_tipo_usuario)
);

CREATE TABLE Equipamento_de_teste (
    id_equipamento_teste SERIAL PRIMARY KEY,
    id_empresa INTEGER,
    marca VARCHAR,
    modelo VARCHAR,
    FOREIGN KEY (id_empresa) REFERENCES Empresa (id_empresa)
);

CREATE TABLE Telefone (
    id_contato SERIAL PRIMARY KEY,
    id_usuario INTEGER,
    telefone VARCHAR UNIQUE,
    FOREIGN KEY (id_usuario) REFERENCES Usuario (id_usuario)
);

CREATE TABLE Subestacoes (
    id_subestacao SERIAL PRIMARY KEY,
    id_empresa INTEGER,
    nome VARCHAR,
    FOREIGN KEY (id_empresa) REFERENCES Empresa (id_empresa)
);

CREATE TABLE Ordem_de_servico (
    id_ordem_servico SERIAL PRIMARY KEY,
    id_empresa INTEGER,
    FOREIGN KEY (id_empresa) REFERENCES Empresa (id_empresa)
);

CREATE TABLE Manutencao (
    id_manutencao SERIAL PRIMARY KEY,
    id_subestacao INTEGER,
    id_ordem_servico INTEGER,
    id_tipos_equipamento INTEGER,
    FOREIGN KEY (id_subestacao) REFERENCES Subestacoes (id_subestacao),
    FOREIGN KEY (id_ordem_servico) REFERENCES Ordem_de_servico (id_ordem_servico),
    FOREIGN KEY (id_tipos_equipamento) REFERENCES Tipos_de_equipamento (id_tipos_equipamentos)
);

-- Criação das tabelas de relacionamentos --

CREATE TABLE e_equi (
    fk_Equipamento_de_teste_id_equipamento_teste INTEGER,
    fk_Empresa_id_empresa INTEGER,
    FOREIGN KEY (fk_Equipamento_de_teste_id_equipamento_teste) REFERENCES Equipamento_de_teste (id_equipamento_teste),
    FOREIGN KEY (fk_Empresa_id_empresa) REFERENCES Empresa (id_empresa)
);

CREATE TABLE e_usu (
    fk_Empresa_id_empresa INTEGER,
    fk_Usuario_id_usuario INTEGER,
    fk_Usuario_id_tipo_usuario INTEGER,
    FOREIGN KEY (fk_Empresa_id_empresa) REFERENCES Empresa (id_empresa),
    FOREIGN KEY (fk_Usuario_id_usuario) REFERENCES Usuario (id_usuario),
    FOREIGN KEY (fk_Usuario_id_tipo_usuario) REFERENCES Tipo_usuario (id_tipo_usuario)
);

CREATE TABLE e_os (
    fk_Ordem_de_servico_id_ordem_servico INTEGER,
    fk_Empresa_id_empresa INTEGER,
    FOREIGN KEY (fk_Ordem_de_servico_id_ordem_servico) REFERENCES Ordem_de_servico (id_ordem_servico),
    FOREIGN KEY (fk_Empresa_id_empresa) REFERENCES Empresa (id_empresa)
);

CREATE TABLE e_sub (
    fk_Subestacoes_id_subestacao INTEGER,
    fk_Empresa_id_empresa INTEGER,
    FOREIGN KEY (fk_Subestacoes_id_subestacao) REFERENCES Subestacoes (id_subestacao),
    FOREIGN KEY (fk_Empresa_id_empresa) REFERENCES Empresa (id_empresa)
);

CREATE TABLE u_tip (
    fk_Tipo_usuario_id_tipo_usuario INTEGER,
    fk_Usuario_id_usuario INTEGER,
    FOREIGN KEY (fk_Tipo_usuario_id_tipo_usuario) REFERENCES Tipo_usuario (id_tipo_usuario),
    FOREIGN KEY (fk_Usuario_id_usuario) REFERENCES Usuario (id_usuario)
);

CREATE TABLE u_tel (
    fk_Usuario_id_usuario INTEGER,
    fk_Telefone_id_contato INTEGER,
    FOREIGN KEY (fk_Usuario_id_usuario) REFERENCES Usuario (id_usuario),
    FOREIGN KEY (fk_Telefone_id_contato) REFERENCES Telefone (id_contato)
);

CREATE TABLE os_man (
    fk_Ordem_de_servico_id_ordem_servico INTEGER,
    fk_Manutencao_id_manutencao INTEGER,
    FOREIGN KEY (fk_Ordem_de_servico_id_ordem_servico) REFERENCES Ordem_de_servico (id_ordem_servico),
    FOREIGN KEY (fk_Manutencao_id_manutencao) REFERENCES Manutencao (id_manutencao)
);

CREATE TABLE sub_equi (
    fk_Subestacoes_id_subestacao INTEGER,
    fk_Tipos_de_equipamento_id_tipos_equipamentos INTEGER,
    FOREIGN KEY (fk_Subestacoes_id_subestacao) REFERENCES Subestacoes (id_subestacao),
    FOREIGN KEY (fk_Tipos_de_equipamento_id_tipos_equipamentos) REFERENCES Tipos_de_equipamento (id_tipos_equipamentos)
);

-- Inserção de dados e consultas de verificação --

insert into tipos_de_equipamento (equipamento) VALUES
	('Chave Seccionadora'),
    ('Disjuntor'),
    ('Transformador');

SELECT * FROM tipos_de_equipamento

INSERT into tipo_usuario (tipo) VALUES
	('Administrador'),
    ('Cliente'),
    ('Executante'),
    ('Responsável Técnico');

SELECT * FROM tipo_usuario

INSERT INTO empresa (cnpj, nome_completo, logradouro, numero, cidade, uf, cep, pais) VALUES 
    ('78.426.570/0001-07', 'SubControl', 'Rua do Ouro', '777', 'Sonhos', 'SP', '13578-233', 'Brasil'),
    ('95.813.892/0001-64', 'Global Tech', 'Av. Padre Cícero', '456', 'Juazeiro do Norte', 'CE', '97531-864', 'Chile'),
    ('31.549.677/0001-20', 'Vales do Encanto', 'Rua Aconchego', '78', 'Picos', 'PI', '13579-246', 'Brasil'),
    ('62.874.045/0001-03', 'Quantum', 'Av. Portugal', '1498', 'Mucajai', 'RR', '98765-432', 'Brasil'),
    ('17.982.361/0001-09', 'Geramais Energia', 'Av dos Andradas', '15', 'Gurupi', 'TO', '86420-579', 'Brasil'),
    ('40.736.205/0001-85', 'Tango Show', 'Calle Florida', '15789', 'Buenos Aires', '', 'C1107AFP', 'Argentina'),
    ('53.218.940/0001-48', 'Restaurante do Baiano', 'Rua Hum', '1100', 'Araraquara', 'RJ', '54321-876', 'Brasil');
 
 SELECT * FROM empresa
 
 INSERT INTO equipamento_de_teste (id_empresa, marca, modelo) VALUES 
    (1, 'Minipa', 'Microhmimetro Digital - MICROHM 100'),
    (1, 'Fluke', 'Megometro Digital - DMG 10 Ki'),
    (1, 'Flir', 'Terrometro - T56'),
    (1, 'Fluke', 'Multimetro Digital  - 179');
    
SELECT * FROM equipamento_de_teste

UPDATE empresa 
SET logradouro = 'Av. Andes', cidade = 'Santiago', UF = '' 
WHERE CNPJ = '95.813.892/0001-64';

SELECT * FROM empresa
WHERE cnpj = '95.813.892/0001-64';

SELECT * FROM empresa

INSERT INTO usuario (id_empresa, id_tipo_usuario, CREA_CPF, nome_completo, email, senha, logradouro, numero, cidade, UF, CEP, Pais) VALUES 
    (1, 3, '212978D MG', 'Roger Abreu', 'rogerabreu@subcontrol.com.br', '123456*', 'Avenida Central', '878', 'Cravinhos', 'SP', '98765-432', 'Brasil'),
    (3, 2, '111.222.333-44', 'André Lima Gonçalves', 'andrelima@valesdoencanto.com.br', '398546*', 'Alameda dos Pássaros', '1111', 'Parnaiba', 'PI', '13579-246', 'Brasil'),
    (2, 2, '23.456.789-0', 'Pedro López Rica', 'pedro@globaltech.com.cl', 'P3589o*', 'Calle Garcia Rey', '3486', 'Santiago', NULL, '98551-893', 'Chile'),
    (4, 2, '555.666.777-88', 'Ana Costa Queiroz', 'anaqueiroz@quantum.com.br', 'Ana5678#', 'Rua das Palmeiras', '3', 'Caracarai', 'RR', '86420-579', 'Brasil'),
    (6, 2, '55.476.397-2', 'Nicolás González García', 'nicolas@tangoshow.com.ar', 'Z485284*', 'Calle Evita Peron', '48', 'Buenos Aires', NULL, 'C1297BGP', 'Argentina'),
    (1, 4, '997536D SP', 'Maria Luiza Andrade Vasconcelos', 'mariavasconcelos@subcontrol.com.br', 'Arg*kmlJh#p', 'Av. dos Girassóis', '645', 'Cotia', 'SP', '21098-765', 'Brasil'),
    (5, 2, '777.888.999-00', 'Camila Souza Andrade', 'camilasouza@geramais.com.br', 's45821*', 'Av. Amendoeiras', '9999', 'Araguaína', 'TO', '54321-098', 'Brasil'),
    (7, 2, '444.333.222-11', 'Josúe Oliveira Alves', 'josue@restaurantedobaiano.com.br', 'e787874*', 'Rua da Jabuticaba', '374', 'Rio de Janeiro', 'RJ', '67890-123', 'Brasil'),
    (1, 3, '456311D DF', 'Carlos Fernandes Siqueira', 'carlosfernandes@subcontrol.com.br', '975G35*', 'Travessa da Paz', '23', 'Brasilia', 'DF', '87654-321', 'Brasil'),
    (1, 1, '123.456.789-00', 'Clara dos Anjos de Lima Barreto', 'claradosanjos@subcontrol.com.br', 'A*Gmkf$h26#', 'Av. Esperança', '458', 'Governador Valadares', 'MG', '39451-238', 'Brasil');
    
SELECT * FROM usuario

INSERT INTO subestacoes (id_empresa, nome) VALUES 
    (3, 'Subestação A'),
    (3, 'Subestação B'),
    (3, 'Subestação C'),
    (2, 'Primeira Global'),
    (6, 'Subestação Tango Show'),
    (7, 'Sub do Baiano'),
    (4, 'Sub1'),
    (4, 'Sub2'),
    (5, 'Gera1'),
    (5, 'Gera2'),
    (1, 'Subestação de treinamento'),
    (2, 'Secundaria Global'),
    (3, 'Subestação D'),
    (4, 'Sub3'),
    (4, 'Sub4');

SELECT * FROM subestacoes

INSERT INTO telefone (id_usuario, telefone) VALUES 
    (4, '(95) 6543-2109'),
    (6, '(13) 87654-3210'),
    (2, '(86) 7654-3210'),
    (7, '(63) 5432-1098'),
    (2, '(86) 9876-5432'),
    (4, '(95) 2109-8765'),
    (7, '(63) 1098-7654'),
    (6, '(11) 89012-3456'),
    (5, '54 9 11 8765-4321'),
    (1, '(13) 7654-3210'),
    (5, '54 9 11 5432-1098'),
    (1, '(11) 5432-1098'),
    (10, '(31) 96543-2109'),
    (10, '(31) 2109-8765'),
    (8, '(21) 4321-0987'),
    (10, '(11) 97654-3210'),
    (3, '56 9 32 2109-8765'),
    (8, '(21) 8765-4321'),
    (1, '(11)2156-3256'),
    (9, '(61) 3210-9876'),
    (9, '(61) 99876-5432'),
    (3, '56 9 32 7654-3210');
   
SELECT * FROM telefone

ALTER TABLE ordem_de_servico
ADD COLUMN subestacoes_manutencao VARCHAR;

INSERT INTO ordem_de_servico (id_empresa, subestacoes_manutencao) VALUES 
    (5, 'Gera2'),
    (3, 'Subestação B, Subestação D, Subestação E'),
    (4, 'Sub1, Sub3');

SELECT * FROM ordem_de_servico

INSERT INTO manutencao (id_subestacao, id_ordem_servico, id_tipos_equipamento) VALUES 
    (10, 1, 3),
    (10, 1, 2),
    (10, 1, 2),
    (10, 1, 1),
    (2, 2, 3),
    (2, 2, 2),
    (2, 2, 1),
    (13, 2, 1),
    (13, 2, 2),
    (13, 2, 3),
    (13, 2, 1),
    (15, 2, 3),
    (15, 2, 1),
    (15, 2, 2),
    (7, 3, 3),
    (14, 3, 2),
    (14, 3, 1),
    (7, 3, 1),
    (7, 3, 2),
    (14, 3, 3);
    
SELECT * FROM manutencao

-- Consultas elaboradas --

SELECT m.id_manutencao, s.nome AS nome_subestacao, e.equipamento AS tipo_equipamento, o.id_empresa AS id_empresa_os, emp.nome_completo AS nome_empresa
FROM Manutencao m
JOIN Subestacoes s ON m.id_subestacao = s.id_subestacao
JOIN Ordem_de_servico o ON m.id_ordem_servico = o.id_ordem_servico
JOIN Tipos_de_equipamento e ON m.id_tipos_equipamento = e.id_tipos_equipamentos
JOIN Empresa emp ON o.id_empresa = emp.id_empresa;

SELECT m.id_manutencao, s.nome AS nome_subestacao, e.equipamento AS tipo_equipamento, emp.nome_completo AS nome_empresa
FROM Manutencao m
JOIN Subestacoes s ON m.id_subestacao = s.id_subestacao
JOIN Ordem_de_servico o ON m.id_ordem_servico = o.id_ordem_servico
JOIN Tipos_de_equipamento e ON m.id_tipos_equipamento = e.id_tipos_equipamentos
JOIN Empresa emp ON o.id_empresa = emp.id_empresa
WHERE e.id_tipos_equipamentos = 2 AND emp.nome_completo = 'Geramais Energia';

SELECT * FROM subestacoes

UPDATE subestacoes 
SET nome = 'Subestação E', id_empresa = 3 
WHERE id_subestacao = 15;

