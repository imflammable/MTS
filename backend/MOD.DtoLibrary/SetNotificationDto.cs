using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.DtoLibrary
{
    public class SetNotificationDto
    {
        public string SenderId { get; set; }
        public int ReceiverId { get; set; }
        public string Text { get; set; }
    }
}
