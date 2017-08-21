CREATE PROCEDURE [dbo].[events_update]
	@param1 int,
	@param2 varchar(50),
	@param3 varchar(50)
AS
	update dbo.events
	set event_description = @param2,
	event_category = @param3
	where event_id = @param1
