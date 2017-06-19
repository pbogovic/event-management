CREATE PROCEDURE [dbo].[zaposlenici_update]	
	@param1 int,
	@param2 char(31),
	@param3 char(31),
	@param4 date,
	@param5 int,
	@param6 float
	
AS
	Update zaposlenici
	SET name = @param2,
		surname = @param3,
		birthDate = @param4,
		odjel_id = @param5,
		placa = @param6
		
	WHERE Id = @param1;


