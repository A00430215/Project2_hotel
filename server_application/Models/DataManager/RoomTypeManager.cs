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
    public class RoomTypeManager : ControllerBase, IDataRoomType<RoomType, long>
    {
        private IConfiguration _config;
        ApplicationContext ctx;
        public RoomTypeManager(ApplicationContext c, IConfiguration config)
        {
            ctx = c;
            _config = config;
        }

        public RoomType Get(long id)
        {
            var room = ctx.RoomType.FirstOrDefault(b => b.RoomTypeID == id);
            return room;
        }

        public IEnumerable<RoomType> GetAll()
        {
            var Room = ctx.RoomType.ToList();
               
            return Room;
        }

        public long Add(RoomType room)
        {
            ctx.RoomType.Add(room);
            long roomNumber = ctx.SaveChanges();
            return roomNumber;
        }

        public long Delete(long id)
        {
            int roomNumber = 0;
            var room = ctx.RoomType.FirstOrDefault(b => b.RoomTypeID == id);
            if (room != null)
            {
                ctx.RoomType.Remove(room);
                roomNumber = ctx.SaveChanges();
            }
            return roomNumber;
        }

        public long Update(long id, RoomType item)
        {
            long roomNumber = 0;
            var room = ctx.RoomType.Find(id);
            if (room != null)
            {
                room.RoomTypeID = item.RoomTypeID;
                room.RoomTypeName = item.RoomTypeName;

                roomNumber = ctx.SaveChanges();
            }
            return roomNumber;
        }
    }
}
