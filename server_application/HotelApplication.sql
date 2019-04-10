
CREATE DATABASE [HotelApplication];

USE [HotelApplication]

DROP TABLE [dbo].[Amenities];

CREATE TABLE [dbo].[Amenities] (
    [AmenitiesID] BIGINT         IDENTITY (1, 1) NOT NULL,
    [RoomType]    NVARCHAR (MAX) NULL,
    [Amenity]     NVARCHAR (MAX) NULL
);


DROP TABLE [dbo].[Booking];


CREATE TABLE [dbo].[Booking] (
    [Booking_Id]     BIGINT        IDENTITY (1, 1) NOT NULL,
    [Customer_ID]    BIGINT        NOT NULL,
    [Room_Type]      INT           NOT NULL,
    [Price]          FLOAT (53)    NOT NULL,
    [Check_In_Date]  DATETIME2 (7) NOT NULL,
    [Check_Out_Date] DATETIME2 (7) NOT NULL,
    [Guest_ID]       BIGINT        NOT NULL,
    [No_Of_Persons]  INT           NOT NULL,
    [No_Of_Rooms]    INT           NOT NULL,
    [PromoID]        INT           NOT NULL,
    [Total_Price]    FLOAT (53)    NOT NULL,
    [Refundable]     INT           NOT NULL,
    [BookingDate]    DATETIME2 (7) NOT NULL
);


DROP TABLE [dbo].[Customers];

CREATE TABLE [dbo].[Customers] (
    [CustomerId]         BIGINT         IDENTITY (1, 1) NOT NULL,
    [FirstName]          NVARCHAR (MAX) NULL,
    [LastName]           NVARCHAR (MAX) NULL,
    [Gender]             NVARCHAR (MAX) NULL,
    [DateOfRegistration] DATETIME2 (7)  NULL,
    [PhoneNumber]        NVARCHAR (MAX) NULL,
    [Email]              NVARCHAR (MAX) NULL,
    [Password]           NVARCHAR (MAX) NULL
);

DROP TABLE [dbo].[Options];

CREATE TABLE [dbo].[Options] (
    [OptionID]        INT            IDENTITY (1, 1) NOT NULL,
    [OptionName]      NVARCHAR (MAX) NULL,
    [Recommended]     INT            NOT NULL,
    [Breakfast]       INT            NOT NULL,
    [NonRefundable]   INT            NOT NULL,
    [Included]        NVARCHAR (MAX) NULL,
    [DiscountedPrice] FLOAT (53)     NOT NULL,
    [RealPrice]       FLOAT (53)     NOT NULL,
    [Deal]            NVARCHAR (MAX) NULL,
    [PromoID]         NVARCHAR (MAX) NULL
);



DROP TABLE [dbo].[Payment];

CREATE TABLE [dbo].[Payment] (
    [PaymentId]           INT            IDENTITY (1, 1) NOT NULL,
    [CardType]            NVARCHAR (MAX) NULL,
    [CardNumber]          NVARCHAR (MAX) NULL,
    [ExpiryMonth]         INT            NOT NULL,
    [FirstName]           NVARCHAR (MAX) NULL,
    [LastName]            NVARCHAR (MAX) NULL,
    [NameOnCard]          NVARCHAR (MAX) NULL,
    [PriceBeforeDiscount] BIGINT         NOT NULL,
    [TotalDiscount]       BIGINT         NOT NULL,
    [PriceAfterDiscount]  BIGINT         NOT NULL,
    [ExpiryYear]          INT            NOT NULL
);



DROP TABLE [dbo].[Promo];

CREATE TABLE [dbo].[Promo] (
    [ID]       BIGINT         IDENTITY (1, 1) NOT NULL,
    [Discount] FLOAT (53)     NOT NULL,
    [Name]     NVARCHAR (MAX) NULL
);



DROP TABLE [dbo].[Review];



CREATE TABLE [dbo].[Review] (
    [ReviewerID] BIGINT         IDENTITY (1, 1) NOT NULL,
    [Title]      NVARCHAR (MAX) NULL,
    [Reviewer]   NVARCHAR (MAX) NULL,
    [Date]       DATETIME2 (7)  NOT NULL,
    [Feedback]   NVARCHAR (MAX) NULL,
    [Rating]     INT            NOT NULL
);


DROP TABLE [dbo].[Room];

CREATE TABLE [dbo].[Room] (
    [RoomNumber] BIGINT IDENTITY (1, 1) NOT NULL,
    [RoomTypeID] INT    NOT NULL,
    [OptionID]   INT    NOT NULL,
    [Status]     INT    NOT NULL
);

CREATE TABLE [dbo].[RoomType] (
    [RoomTypeID]   INT            IDENTITY (1, 1) NOT NULL,
    [RoomTypeName] NVARCHAR (MAX) NULL
);

DROP TABLE [dbo].[RoomType];

CREATE TABLE [dbo].[RoomType] (
    [RoomTypeID]   INT            IDENTITY (1, 1) NOT NULL,
    [RoomTypeName] NVARCHAR (MAX) NULL
);






