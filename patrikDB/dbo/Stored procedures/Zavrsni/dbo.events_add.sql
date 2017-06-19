CREATE PROCEDURE [dbo].[events_add]
	@param1 varchar(50),
	@param2 varchar(50)
AS
	insert into dbo.events (event_description, event_category) values( @param1, @param2)


