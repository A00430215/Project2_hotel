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
    public class RoomManager : ControllerBase, IDataRoom<Room, long>
    {
        private IConfiguration _config;
        ApplicationContext ctx;
        public RoomManager(ApplicationContext c, IConfiguration config)
        {
            ctx = c;
            _config = config;
        }

        public Room Get(long id)
        {
            var Room = ctx.Room.FirstOrDefault(b => b.RoomNumber == id);
            return Room;
        }

        public IEnumerable<Room> GetAll()
        {
            var Rooms = ctx.Room.ToList();
            return Rooms;
        }

        public long Add(Room Room)
        {
            ctx.Room.Add(Room);
            long RoomNumber = ctx.SaveChanges();
            return RoomNumber;
        }

        public long Delete(long id)
        {
            int RoomNumber = 0;
            var Room = ctx.Room.FirstOrDefault(b => b.RoomNumber == id);
            if (Room != null)
            {
                ctx.Room.Remove(Room);
                RoomNumber = ctx.SaveChanges();
            }
            return RoomNumber;
        }

        public long Update(long id, Room item)
        {
            long RoomNumber = 0;
            var Room = ctx.Room.Find(id);
            if (Room != null)
            {
                Room.RoomNumber = item.RoomNumber;
               

                RoomNumber = ctx.SaveChanges();
            }
            return RoomNumber;
        }
    }
}
