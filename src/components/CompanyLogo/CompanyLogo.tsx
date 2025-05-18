type CompanyProps = {
  company: string;
  size?: number;
};

const CompanyLogo = ({ company, size = 40 }: CompanyProps) => {
  const getLogo = (company: string): string => {
    switch (company.toLowerCase()) {
      case "sky airlines":
        return "/logo/sky_logo.webp";
      case "sunshine air":
        return "/logo/sunshine_logo.webp";
      case "global express":
        return "/logo/global_logo.jpg";
      case "rapid air":
        return "/logo/rapid_logo.jpg";
      case "aeroswift":
        return "/logo/aeroSwift_logo.png";
      case "blue horizon":
        return "/logo/blue_horizon_logo.jpg";
      case "jetset":
        return "/logo/jetset_logo.png";
      case "air nova":
        return "/logo/air_nova_logo.png";
      case "cosmo air":
        return "/logo/cosmo_logo.png";
      case "eagle wings":
        return "/logo/eagle_wings_logo.jpg";
      default:
        return "/logo/sunshine_logo.webp";
    }
  };

  return (
    <img
      src={getLogo(company)}
      alt={`${company} logo`}
      width={size}
      height={size}
      style={{ objectFit: "contain", width: "50px", height: "50px" }}
    />
  );
};

export default CompanyLogo;
