CREATE PROCEDURE [dbo].zaposlenici_byId
	@param1 int
	
AS
	SELECT * FROM zaposlenici WHERE
	id = @param1;

