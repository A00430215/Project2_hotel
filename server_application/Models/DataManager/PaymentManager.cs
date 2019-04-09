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
    public class PaymentManager : ControllerBase, IDataPayment<Payment, long>
    {
        private IConfiguration _config;
        ApplicationContext ctx;
        public PaymentManager(ApplicationContext c, IConfiguration config)
        {
            ctx = c;
            _config = config;
        }

        public Payment Get(long id)
        {
            var PaymentObj = ctx.Payment.FirstOrDefault(b => b.PaymentId == id);
            return PaymentObj;
        }

        public IEnumerable<Payment> GetAll()
        {
            var Payments = ctx.Payment.ToList();
            return Payments;
        }

        public long Add(Payment Pay)
        {
            ctx.Payment.Add(Pay);
            long PaymentNumber = ctx.SaveChanges();
            return PaymentNumber;
        }

        public long Delete(long id)
        {
            int PaymentNumber = 0;
            var Pay = ctx.Payment.FirstOrDefault(b => b.PaymentId == id);
            if (Pay != null)
            {
                ctx.Payment.Remove(Pay);
                PaymentNumber = ctx.SaveChanges();
            }
            return PaymentNumber;
        }

        public long Update(long id, Payment item)
        {
            long PromoNumber = 0;
            var Promo = ctx.Payment.Find(id);
            if (Promo != null)
            {
                Promo.PaymentId = item.PaymentId;
                PromoNumber = ctx.SaveChanges();
            }
            return PromoNumber;
        }

        public double CalculatePay(Payment item) {
            return 0.0;
        }
    }
}
