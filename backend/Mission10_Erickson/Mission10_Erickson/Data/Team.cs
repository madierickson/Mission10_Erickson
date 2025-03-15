using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Mission10_Erickson.Data;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

public class Team
{
    [Key]  // Primary Key
    public int TeamID { get; set; }

    [Required]
    public string TeamName { get; set; } = string.Empty;

    public int? CaptainID { get; set; }  // Can be null

    [JsonIgnore]
    public ICollection<Bowler> Bowlers { get; set; }
}
