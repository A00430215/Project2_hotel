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
    public class TravellerManager : ControllerBase, IDataTraveller<Traveller, long>
    {
        private IConfiguration _config;
        ApplicationContext ctx;
        public TravellerManager(ApplicationContext c, IConfiguration config)
        {
            ctx = c;
            _config = config;
        }

        public Traveller Get(long id)
        {
            var Traveller = ctx.Traveller.FirstOrDefault(b => b.Id == id);
            return Traveller;
        }

        public IEnumerable<Traveller> GetAll()
        {
            var Travellers = ctx.Traveller.ToList();
            return Travellers;
        }

        public long Add(Traveller Traveller)
        {
            ctx.Traveller.Add(Traveller);
            long TravellerNumber = ctx.SaveChanges();
            return TravellerNumber;
        }

        public long Delete(long id)
        {
            int TravellerNumber = 0;
            var Traveller = ctx.Traveller.FirstOrDefault(b => b.Id == id);
            if (Traveller != null)
            {
                ctx.Traveller.Remove(Traveller);
                TravellerNumber = ctx.SaveChanges();
            }
            return TravellerNumber;
        }

        public long Update(long id, Traveller item)
        {
            long TravellerNumber = 0;
            var Traveller = ctx.Traveller.Find(id);
            if (Traveller != null)
            {
                Traveller.Id = item.Id;
                TravellerNumber = ctx.SaveChanges();
            }
            return TravellerNumber;
        }
    }
}
