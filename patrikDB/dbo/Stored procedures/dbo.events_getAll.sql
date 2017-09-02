CREATE PROCEDURE [dbo].[events_getAll]

AS
	SELECT e.*, c.Img category_img, c.Name category_name from dbo.events e
	Inner join dbo.categories c on e.Id_category = c.Id

