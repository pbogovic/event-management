CREATE TABLE [dbo].[zaposlenici_tasks]
(
	[event_id] INT NOT NULL , 
    [task_id] INT NOT NULL DEFAULT NEXT VALUE FOR [dbo].[tasks_seq], 
    [task_name] NVARCHAR(50) NOT NULL, 
    [isComplete] BIT NOT NULL DEFAULT 0, 
    PRIMARY KEY ([id_zaposlenik], rbr),

	constraint event_id_FK Foreign key (event_id) references dbo.events(event_id)
	
)
