CREATE TABLE [dbo].[categories]
(
	[Id] INT NOT NULL PRIMARY KEY DEFAULT NEXT VALUE FOR [dbo].[categories_seq], 
    [Name] VARCHAR(50) NOT NULL, 
    [Img] VARCHAR(50) NULL
)
