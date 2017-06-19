CREATE PROCEDURE [dbo].[zaposlenici_delete]
	@param1 int	
AS
	DELETE FROM dbo.zaposlenici
	Where zaposlenici.Id =	@param1

