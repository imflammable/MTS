using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.DtoLibrary
{
    public class GetUserListDto
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool AccessPermission { get; set; }

    }
}
