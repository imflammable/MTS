using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.ModelLibrary
{
    public class Notification
    {
        public int NotificationId { get; set; }
        public MODUser Sender { get; set; }
        public MODUser Receiver { get; set; }
        public string Text { get; set; }

    }
}
