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
    public class OptionsManager : ControllerBase, IDataOption<Option, long>
    {
        private IConfiguration _config;
        ApplicationContext ctx;
        public OptionsManager(ApplicationContext c, IConfiguration config)
        {
            ctx = c;
            _config = config;
        }

        public Option Get(long id)
        {
            var Options = ctx.Options.FirstOrDefault(b => b.OptionID == id);
            return Options;
        }

        public IEnumerable<Option> GetAll()
        {
            var Optionss = ctx.Options.ToList();
            return Optionss;
        }

        public long Add(Option Options)
        {
            ctx.Options.Add(Options);
            long OptionsNumber = ctx.SaveChanges();
            return OptionsNumber;
        }

        public long Delete(long id)
        {
            int OptionsNumber = 0;
            var Options = ctx.Options.FirstOrDefault(b => b.OptionID == id);
            if (Options != null)
            {
                ctx.Options.Remove(Options);
                OptionsNumber = ctx.SaveChanges();
            }
            return OptionsNumber;
        }

        public long Update(long id, Option item)
        {
            long optionID = 0;
            var Options = ctx.Options.Find(id);
            if (Options != null)
            {
                Options.OptionID = item.OptionID;
                Options.OptionName = item.OptionName;
                Options.RealPrice = item.RealPrice;
                Options.NonRefundable = item.NonRefundable;
                Options.Included = item.Included;
                Options.Deal = item.Deal;
                optionID = ctx.SaveChanges();
            }
            return optionID;
        }
    }
}
