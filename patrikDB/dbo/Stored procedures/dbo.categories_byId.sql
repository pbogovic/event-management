CREATE PROCEDURE [dbo].[categories_byId]
	@param1 int
	
AS
	SELECT * from categories 
	where Id = @param1

