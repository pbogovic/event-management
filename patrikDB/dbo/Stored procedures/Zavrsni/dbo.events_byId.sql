CREATE PROCEDURE [dbo].[events_byId]
	@param1 int
	
AS
	SELECT * from dbo.events
	where event_id = @param1

