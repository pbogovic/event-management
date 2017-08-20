CREATE PROCEDURE [dbo].[izvjestaj.zapByOdjel]
	
AS


SELECT odjeli.odjel_id, odjeli.odjel_naziv ,count(zaposlenici.Id) AS brZap
		
	from zaposlenici

	inner join odjeli on zaposlenici.odjel_id = odjeli.odjel_id 

	group by odjeli.odjel_id, odjeli.odjel_naziv