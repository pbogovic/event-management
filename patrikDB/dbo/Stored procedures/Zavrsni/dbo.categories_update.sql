CREATE PROCEDURE [dbo].[categories_update]
	@param1 int = 0,
	@param2 varchar(50),
	@param3 varchar(50)
AS
	update dbo.categories
	set category_name = @param2,
		category_img = @param3
	where category_id = @param1

