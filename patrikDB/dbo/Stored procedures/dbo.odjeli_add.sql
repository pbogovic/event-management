CREATE PROCEDURE [dbo].[odjeli_add]
	@param1 varchar(50)
	
AS
	insert into dbo.odjeli(odjel_naziv) values  (@param1)


