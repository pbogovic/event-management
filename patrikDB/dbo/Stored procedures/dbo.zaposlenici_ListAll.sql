CREATE PROCEDURE [dbo].[zaposlenici_ListAll]
AS	

	 SELECT zaposlenici.*, odjeli.odjel_naziv, odjeli.img_url  
	 FROM dbo.zaposlenici 	 
	 inner join dbo.odjeli on  dbo.zaposlenici.odjel_id = dbo.odjeli.odjel_id 
	 
