CREATE TABLE [dbo].[tasks]
(
	[Id_Event] INT NOT NULL , 
    [Id] INT NOT NULL DEFAULT NEXT VALUE FOR [dbo].[tasks_seq], 
    [Name] NVARCHAR(50) NOT NULL, 
    [IsComplete] BIT NOT NULL DEFAULT 0, 
    PRIMARY KEY ([Id], [Id_Event]),

	constraint event_id_FK Foreign key ([Id_Event]) references dbo.events([Id])
	
)
