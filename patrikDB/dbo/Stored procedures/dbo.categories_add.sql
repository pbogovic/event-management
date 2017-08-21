CREATE PROCEDURE [dbo].[categories_add]
	@param1 varchar(30)	
AS
	insert into dbo.categories(Name) values(@param1)

