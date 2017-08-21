CREATE PROCEDURE [dbo].[categories_add]
	@param1 varchar(30),
	@param2 varchar(50)
AS
	insert into dbo.categories(category_name, category_img) values(@param1, @param2)

