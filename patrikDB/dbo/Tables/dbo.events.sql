CREATE TABLE [dbo].[events]
(
	[Id] INT NOT NULL PRIMARY KEY DEFAULT NEXT VALUE FOR [dbo].[events_seq], 
    [Name] INT NULL, 
    [Description] VARCHAR(50) NULL 

	constraint event_category_FK Foreign key ([Name]) references dbo.categories([Id]), 
    [Id_category] NCHAR(10) NULL
)
