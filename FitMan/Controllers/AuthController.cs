using Microsoft.AspNetCore.Mvc;

namespace FitMan.Controllers
{
    public class AuthController : Controller
    {
        [Route("")]
        [HttpGet]
        public IActionResult Register()
        {
            return Ok("test");
        }
    }
}
