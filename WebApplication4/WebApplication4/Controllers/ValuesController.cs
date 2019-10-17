using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication4.Modules;

namespace WebApplication4.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly EmpDbContext _context;

        public ValuesController(EmpDbContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public async Task<ActionResult<List<Employee>>> GetAsync()
      {
            var Employees = _context.Employees.ToList();
            return Employees;

        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetTodoItem(int id)
        {
            var Employee = await _context.Employees.FindAsync(id);

            if (Employee != null)
            {
                return Employee;
            }
            else
            {
                
                return NotFound();
            }
        }
        // POST api/values
        [HttpPost]
        public async Task postAsync([FromBody]Employee value)

        {
            _context.Employees.Add(value);
            await _context.SaveChangesAsync();
        }

        // PUT api/values/5
        [HttpPut("{id}")]

        public async Task<bool> Put(int id, [FromBody] Employee value)
        {
            var Employee = await _context.Employees.FindAsync(value.EmployeeId);

            if (Employee != null)
            {
                Employee.Gender = value.Gender;
                Employee.Address = value.Address;
                await _context.SaveChangesAsync();
                return true;
            }
            else
            {
                return false;
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<bool> Delete(int id)
        {
            var Employee = await _context.Employees.FindAsync(id);
            if (Employee == null)
            {
                return false;
            }
            else
            {
                _context.Employees.Remove(Employee);
                await _context.SaveChangesAsync();

                return true;
            }
        }
    }
}
