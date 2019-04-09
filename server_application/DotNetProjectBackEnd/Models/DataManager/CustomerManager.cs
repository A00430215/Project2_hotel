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
    public class CustomerManager : ControllerBase, IDataRepository<Customer, long>
    {
        private IConfiguration _config;
        ApplicationContext ctx;
        public CustomerManager(ApplicationContext c, IConfiguration config)
        {
            ctx = c;
            _config = config;
        }

        public Customer Get(long id)
        {
            var customer = ctx.Customers.FirstOrDefault(b => b.CustomerId == id);
            return customer;
        }

        public IActionResult CheckStatus(string email, string password)
        {
            IActionResult response = Unauthorized();
            var customer = ctx.Customers.FirstOrDefault(b => (b.Email == email && b.Password == password) );
            if (customer != null)
            {
                var tokenString = GenerateJSONWebToken(customer);

                LoginResponse login = new LoginResponse();
                login.CustomerId = customer.CustomerId;
                login.CustomerName = customer.FirstName +" "+ customer.LastName;
                login.TokenString = tokenString;
                login.DateOfRegistration = customer.DateOfRegistration;
                login.PhoneNumber = customer.PhoneNumber;
                login.Email = customer.Email;

                string jsonString = JsonHelper.JsonSerializer<LoginResponse>(login);
                response = Ok(jsonString);
            }

            return response;
        }

        public string GenerateJSONWebToken(Customer userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              null,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public IEnumerable<Customer> GetAll()
        {
            var customers = ctx.Customers.ToList();
            return customers;
        }

        public long Add(Customer stundent)
        {
            ctx.Customers.Add(stundent);
            long customerID = ctx.SaveChanges();
            return customerID;
        }

        public long Delete(long id)
        {
            int customerID = 0;
            var customer = ctx.Customers.FirstOrDefault(b => b.CustomerId == id);
            if (customer != null)
            {
                ctx.Customers.Remove(customer);
                customerID = ctx.SaveChanges();
            }
            return customerID;
        }

        public long Update(long id, Customer item)
        {
            long customerID = 0;
            var customer = ctx.Customers.Find(id);
            if (customer != null)
            {
                customer.FirstName = item.FirstName;
                customer.LastName = item.LastName;
                customer.Gender = item.Gender;
                customer.PhoneNumber = item.PhoneNumber;
                customer.Email = item.Email;
                customer.DateOfRegistration = item.DateOfRegistration;

                customerID = ctx.SaveChanges();
            }
            return customerID;
        }
    }
}
