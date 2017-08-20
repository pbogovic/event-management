CREATE PROCEDURE [dbo].[odjeli_listAllWithInfo]
	
AS
	SELECT odjeli.odjel_id, odjeli.odjel_naziv, str(count(zaposlenici_tasks.rbr)) + '/'+ str(((select count(rbr) from zaposlenici_tasks
	where isComplete = 1))) as zadaci
	from dbo.odjeli
	join dbo.zaposlenici on odjeli.odjel_id = zaposlenici.odjel_id
	join dbo.zaposlenici_tasks on zaposlenici.Id = zaposlenici_tasks.id_zaposlenik
	group by odjeli.odjel_id, odjeli.odjel_naziv


	
	