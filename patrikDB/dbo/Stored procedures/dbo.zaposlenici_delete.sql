CREATE PROCEDURE [dbo].[zaposlenici_delete]
	@param1 int	
AS
	
	delete from dbo.zaposlenici_tasks
	where id_zaposlenik = @param1;
	
	DELETE FROM dbo.zaposlenici
	Where zaposlenici.Id =	@param1

