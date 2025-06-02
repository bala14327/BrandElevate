using Infosys.BrandElevateDAL.repos;
using Infosys.BrandElevateDAL.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Infosys.BrandElevateAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdsController : ControllerBase
    {
        private readonly AdHistoryRepository _adRepo;

        public AdsController(BrandElevateDbContext context)
        {
            _adRepo = new AdHistoryRepository(context);
        }

        // GET: api/ads/user/5
        [HttpGet("user/{userId}")]
        public ActionResult<List<Ad>> GetAdsByUserId(int userId)
        {
            var ads = _adRepo.getUserAds(userId);
            if (ads == null || ads.Count == 0)
            {
                return NotFound("No ads found for the given user ID.");
            }
            return Ok(ads);
        }
    }
}
