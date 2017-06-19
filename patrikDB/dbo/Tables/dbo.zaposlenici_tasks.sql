CREATE TABLE [dbo].[zaposlenici_tasks]
(
	[id_zaposlenik] INT NOT NULL , 
    [rbr] INT NOT NULL DEFAULT NEXT VALUE FOR [dbo].[tasks_seq], 
    [zadatak_naslov] NVARCHAR(50) NOT NULL, 
    [isComplete] BIT NOT NULL DEFAULT 0, 
    PRIMARY KEY ([id_zaposlenik], rbr),

	constraint id_zaposlenikFK Foreign key (id_zaposlenik) references dbo.zaposlenici(Id)
	
)
