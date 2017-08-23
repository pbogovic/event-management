CREATE PROCEDURE [dbo].[events_add]
	@param1 varchar(50),
	@param2 varchar(50),
	@param3 int
AS
	insert into dbo.events (Name ,Description, Id_category) values( @param1, @param2, @param3)


