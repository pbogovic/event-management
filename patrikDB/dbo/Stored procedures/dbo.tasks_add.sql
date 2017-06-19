
CREATE PROCEDURE [dbo].[tasks_add]
	@param1 int,
	@param2 varchar(50)
	
AS
	Insert into dbo.zaposlenici_tasks(id_zaposlenik, zadatak_naslov) 
			Values(@param1, @param2)
	

