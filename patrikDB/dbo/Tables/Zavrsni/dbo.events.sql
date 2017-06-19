CREATE TABLE [dbo].[events]
(
	[event_id] INT NOT NULL PRIMARY KEY, 
    [event_category] INT NULL, 
    [event_description] VARCHAR(50) NULL 

	constraint event_category_FK Foreign key (event_category) references dbo.categories(category_id)
)
