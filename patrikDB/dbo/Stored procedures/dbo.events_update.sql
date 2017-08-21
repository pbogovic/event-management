CREATE PROCEDURE [dbo].[events_update]
	@param1 int,
	@param2 varchar(50),
	@param3 varchar(50)
AS
	update dbo.events
	set Description = @param2,
	Id_category = @param3
	where Id= @param1
