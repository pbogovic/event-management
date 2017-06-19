CREATE TABLE [dbo].[zaposlenici]
(
	[Id] INT NOT NULL DEFAULT NEXT VALUE FOR [dbo].[zaposlenici_seq], 
    [name] char(31) NOT NULL, 
    [surname] char(31) NOT NULL,
	[birthDate] date NOT NULL, 
    [odjel_id] INT NOT NULL, 
    [placa] FLOAT NOT NULL, 
    [info] NVARCHAR(100) NULL, 
    [pic_url] NVARCHAR(50) NULL, 
    CONSTRAINT zaposlenici_pk PRIMARY KEY (Id),
	CONSTRAINT odjel_id_FK FOREIGN KEY (odjel_id) REFERENCES dbo.odjeli(odjel_id),

	CONSTRAINT [CK_zaposlenici] CHECK (	
	(LEN(name)) >= 3 AND
	(LEN(surname)) >=3 AND
	(Year(birthDate)) > 1990 AND
	placa >= 0	
	)
)
