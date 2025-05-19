export const renderNameCountry = (name: string) => {
    switch (name.toLowerCase()) {
      case "lax":
        return "Los Angeles , CA";
      case "jfk":
        return "New York, NY";
      case "sfo":
        return "San Francisco, CA";
      case "ord":
        return "Chicago, IL";
      case "atl":
        return "Atlanta, GA";
      case "mia":
        return "Miami, FL";
      case "dfw":
        return "Dallas, TX";
      case "sea":
        return "Seattle, WA";
      case "bos":
        return "Boston, MA";
      case "phx":
        return "Phoenix, AZ";
        case "den":
        return "Denver, CO";
        case "iah":
        return "Houston, TX";
        case "las":
        return "Las Vegas, NV";
        case "msp":
        return "Minneapolis, MN";
        case "clt":
        return "Charlotte, NC";
      default:
        return "";
    }
};