CREATE PROCEDURE [dbo].[tasks_update]
	@param1 int ,
	@param2 int ,
	@param3 bit
AS
	Update dbo.zaposlenici_tasks
	set isComplete = @param3
	where id_zaposlenik = @param1 and rbr = @param2


