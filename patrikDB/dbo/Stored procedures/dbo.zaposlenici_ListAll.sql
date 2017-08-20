CREATE PROCEDURE [dbo].[zaposlenici_ListAll]
AS	

 SELECT zaposlenici.*, odjeli.odjel_naziv, odjeli.img_url, 
	
	 str((select count(zaposlenici_tasks.isComplete) 
	 from zaposlenici_tasks 
	 where zaposlenici_tasks.id_zaposlenik = zaposlenici.Id and zaposlenici_tasks.isComplete = 1))  + '/' +

	 str((select count(zaposlenici_tasks.rbr)
	 from zaposlenici_tasks
	 where zaposlenici_tasks.id_zaposlenik = zaposlenici.Id)) as zadaci
	 FROM dbo.zaposlenici 	 
	 inner join dbo.odjeli on  dbo.zaposlenici.odjel_id = dbo.odjeli.odjel_id; 
	

