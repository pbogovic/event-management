CREATE PROCEDURE [dbo].[eventsByCategories]
AS
	select c.Name, COUNT(e.Id) number
from dbo.events e
inner join dbo.categories c on (e.Id_category = c.Id)
group by c.Name;
