CREATE PROCEDURE [dbo].[events_update]
	@param1 int,
	@param2 varchar(50),
	@param3 varchar(50),
	@param4 int
AS
	update dbo.events
	set Name = @param2,
	 Description= @param3,
	 Id_category = @param4	 
	where Id= @param1
