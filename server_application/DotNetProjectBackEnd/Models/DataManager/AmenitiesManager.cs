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
    public class AmenitiesManager : ControllerBase, IDataAmenities<Amenities, long>
    {
        private IConfiguration _config;
        ApplicationContext ctx;
        public AmenitiesManager(ApplicationContext c, IConfiguration config)
        {
            ctx = c;
            _config = config;
        }

        public Amenities Get(long id)
        {
            var amenities = ctx.Amenities.FirstOrDefault(b => b.AmenitiesID == id);
            return amenities;
        }

        public IEnumerable<Amenities> GetAll()
        {
            var amenities = ctx.Amenities.ToList();
            return amenities;
        }

        public long Add(Amenities amenities)
        {
            ctx.Amenities.Add(amenities);
            long amenitiesID = ctx.SaveChanges();
            return amenitiesID;
        }

        public long Delete(long id)
        {
            int amenitiesID = 0;
            var amenities = ctx.Amenities.FirstOrDefault(b => b.AmenitiesID == id);
            if (amenities != null)
            {
                ctx.Amenities.Remove(amenities);
                amenitiesID = ctx.SaveChanges();
            }
            return amenitiesID;
        }

        public long Update(long id, Amenities item)
        {
            long amenitiesID = 0;
            var amenities = ctx.Amenities.Find(id);
            if (amenities != null)
            {
                amenities.AmenitiesID = item.AmenitiesID;
                amenities.RoomType = item.RoomType;
                amenities.Amenity = item.Amenity;


                amenitiesID = ctx.SaveChanges();
            }
            return amenitiesID;
        }
    }


}

