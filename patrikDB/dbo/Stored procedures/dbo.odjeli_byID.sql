CREATE PROCEDURE [dbo].[odjeli_byID]
	@param1 int = 0	
AS
	SELECT * from dbo.odjeli  
	where odjel_id = @param1

