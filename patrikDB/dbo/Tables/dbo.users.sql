CREATE TABLE [dbo].[users]
(
	[Id] INT NOT NULL PRIMARY KEY DEFAULT NEXT VALUE FOR [dbo].[users_seq], 
    [Name] VARCHAR(50) NULL, 
    [Surname] VARCHAR(50) NULL
)
