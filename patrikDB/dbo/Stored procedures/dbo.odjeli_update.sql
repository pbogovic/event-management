CREATE PROCEDURE [dbo].[odjeli_update]
    
	@param1 int,
	@param2 varchar(50)	
	
AS
	Update dbo.odjeli
	SET odjel_naziv = @param2	
		
	WHERE odjel_id = @param1;
