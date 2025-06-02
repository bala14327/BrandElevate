using Infosys.BrandElevateWebApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace Infosys.BrandElevateWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdHistoryController : ControllerBase
    {
        private readonly AdHistoryService _service;

        public AdHistoryController(AdHistoryService service)
        {
            _service = service;
        }

        [HttpGet("{userId}")]
        public IActionResult GetHistory(int userId)
        {
            var history = _service.GetUserAds(userId);
            return Ok(history);
        }
    }
}
