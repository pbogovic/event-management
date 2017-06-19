CREATE TABLE [dbo].[odjeli]
(
	[odjel_id] INT NOT NULL PRIMARY KEY DEFAULT NEXT VALUE FOR [dbo].[odjeli_seq], 
    [odjel_naziv] VARCHAR(30) NOT NULL

	
    CONSTRAINT [CK_odjeli_Column] CHECK ( (LEN(odjel_naziv)) >= 3 ), 
    [img_url] VARCHAR(50) NULL

)
