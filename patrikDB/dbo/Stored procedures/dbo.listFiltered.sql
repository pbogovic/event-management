CREATE PROCEDURE [dbo].[listFiltered]
	@param1 int
	
AS
	SELECT zaposlenici.*, odjeli.odjel_naziv  
	 FROM dbo.zaposlenici 	 
	 inner join dbo.odjeli on  dbo.zaposlenici.odjel_id = dbo.odjeli.odjel_id 
	 Where zaposlenici.odjel_id = @param1

