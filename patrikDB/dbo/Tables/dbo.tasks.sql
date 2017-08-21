CREATE TABLE [dbo].[tasks]
(
	[event_id] INT NOT NULL , 
    [task_id] INT NOT NULL DEFAULT NEXT VALUE FOR [dbo].[tasks_seq], 
    [task_name] NVARCHAR(50) NOT NULL, 
    [isComplete] BIT NOT NULL DEFAULT 0, 
    PRIMARY KEY ([task_id], [event_id]),

	constraint event_id_FK Foreign key (event_id) references dbo.events(event_id)
	
)
