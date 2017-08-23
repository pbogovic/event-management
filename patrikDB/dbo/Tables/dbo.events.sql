CREATE TABLE [dbo].[events]
(
	[Id] INT NOT NULL PRIMARY KEY DEFAULT NEXT VALUE FOR [dbo].[events_seq], 
    [Name] VARCHAR(50) NULL, 
    [Description] VARCHAR(50) NULL 

	constraint event_category_FK Foreign key ([Id_category]) references dbo.categories([Id]), 
    [Id_category] INT NULL
)
