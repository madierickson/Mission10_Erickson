using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using Backend.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mission10_Erickson.Data;

namespace Mission10_Erickson.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BowlersController : ControllerBase
{
    private readonly BowlerContext _context;

    public BowlersController(BowlerContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Bowler>>> GetBowlers()
    {
        var bowlers = await _context.Bowlers
            .Include(b => b.Team)
            .Where(b => b.Team != null && (b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks"))
            .ToListAsync();

        return Ok(bowlers);
    }
}
