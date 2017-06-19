CREATE PROCEDURE [dbo].[zaposlenici_listTasks]
	@param1 int
	
AS
	SELECT * from dbo.zaposlenici_tasks
	
	where id_zaposlenik = @param1

