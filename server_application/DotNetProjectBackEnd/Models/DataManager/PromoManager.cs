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
    public class PromoManager : ControllerBase, IDataPromo<Promo, long>
    {
        private IConfiguration _config;
        ApplicationContext ctx;
        public PromoManager(ApplicationContext c, IConfiguration config)
        {
            ctx = c;
            _config = config;
        }

        public Promo Get(long id)
        {
            var Promo = ctx.Promo.FirstOrDefault(b => b.ID == id);
            return Promo;
        }

        public IEnumerable<Promo> GetAll()
        {
            var Promos = ctx.Promo.ToList();
            return Promos;
        }

        public long Add(Promo Promo)
        {
            ctx.Promo.Add(Promo);
            long PromoNumber = ctx.SaveChanges();
            return PromoNumber;
        }

        public long Delete(long id)
        {
            int PromoNumber = 0;
            var Promo = ctx.Promo.FirstOrDefault(b => b.ID == id);
            if (Promo != null)
            {
                ctx.Promo.Remove(Promo);
                PromoNumber = ctx.SaveChanges();
            }
            return PromoNumber;
        }

        public long Update(long id, Promo item)
        {
            long PromoNumber = 0;
            var Promo = ctx.Promo.Find(id);
            if (Promo != null)
            {
                Promo.ID = item.ID;
                PromoNumber = ctx.SaveChanges();
            }
            return PromoNumber;
        }
    }
}
