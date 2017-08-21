CREATE PROCEDURE [dbo].[categories_update]
	@param1 int = 0,
	@param2 varchar(50),
	@param3 varchar(50)
AS
	update dbo.categories
	set Name = @param2,
		Img = @param3
	where Id = @param1

