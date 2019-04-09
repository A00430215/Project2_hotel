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
    public class ReviewManager : ControllerBase, IDataReview<Review, long>
    {
        private IConfiguration _config;
        ApplicationContext ctx;
        public ReviewManager(ApplicationContext c, IConfiguration config)
        {
            ctx = c;
            _config = config;
        }

        public Review Get(long id)
        {
            var review = ctx.Review.FirstOrDefault(b => b.ReviewerID == id);
            return review;
        }

        public IEnumerable<Review> GetAll()
        {
            var reviews = ctx.Review.ToList();
            return reviews;
        }

        public long Add(Review review)
        {
            ctx.Review.Add(review);
            long reviewerID = ctx.SaveChanges();
            return reviewerID;
        }

        public long Delete(long id)
        {
            int reviewerID = 0;
            var review = ctx.Review.FirstOrDefault(b => b.ReviewerID == id);
            if (review != null)
            {
                ctx.Review.Remove(review);
                reviewerID = ctx.SaveChanges();
            }
            return reviewerID;
        }

        public long Update(long id, Review item)
        {
            long reviewerID = 0;
            var review = ctx.Review.Find(id);
            if (review != null)
            {
                review.ReviewerID = item.ReviewerID;
                review.Title = item.Title;
                review.Reviewer = item.Reviewer;
                review.Date = item.Date;
                review.Feedback = item.Feedback;
                review.Rating = item.Rating;

                reviewerID = ctx.SaveChanges();
            }
            return reviewerID;
        }
    }
}
