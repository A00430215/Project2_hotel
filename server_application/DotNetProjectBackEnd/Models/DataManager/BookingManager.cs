using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotNetProjectBackEnd.Models.Repository;

using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;

namespace DotNetProjectBackEnd.Models.DataManager
{
    public class BookingManager : ControllerBase, IDataBooking<Booking, long>
    {

        private IConfiguration _config;
        ApplicationContext ctx;
        public BookingManager(ApplicationContext c, IConfiguration config)
        {
            ctx = c;
            _config = config;
        }


        public Booking Get(long id)
        {
            var booking = ctx.Booking.FirstOrDefault(b => b.Booking_Id == id);
            return booking;
        }

    


        public IEnumerable<Booking> GetAll()
        {
                var bookings = ctx.Booking.ToList();
                return bookings;
            }

            public long Add(Booking booking)
            {
                ctx.Booking.Add(booking);
               long Booking_ID = ctx.SaveChanges();
            return Booking_ID;
        }

    public long Delete(long id)
        {
            int Bookingid = 0;
            var booking = ctx.Booking.FirstOrDefault(b => b.Booking_Id == id);
            if (booking != null)
            {
                ctx.Booking.Remove(booking);
                Bookingid = ctx.SaveChanges();
            }
            return Bookingid;
        }

        public long Update(long id, Booking item)
        {
            long Bookingid = 0;
            var booking = ctx.Booking.Find(id);
            if (booking != null)
            {
                booking.Room_Type = item.Room_Type;
                booking.Price = item.Price;
                booking.Check_In_Date = item.Check_In_Date;
                booking.Check_Out_Date = item.Check_Out_Date;
                booking.No_Of_Persons = item.No_Of_Persons;
                booking.Total_Price = item.Total_Price;
                booking.Refundable = item.Refundable;
                Bookingid = ctx.SaveChanges();
            }
            return Bookingid;
        }





    }


}
