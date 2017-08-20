CREATE PROCEDURE [dbo].[odjeli_listAll]
	
AS
	SELECT odjeli.odjel_id, odjeli.odjel_naziv
	from dbo.odjeli	
