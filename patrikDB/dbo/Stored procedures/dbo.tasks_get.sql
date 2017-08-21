CREATE PROCEDURE [dbo].[tasks_get]
	@param1 int
	
AS
	SELECT * from dbo.tasks 
	where event_id = @param1


