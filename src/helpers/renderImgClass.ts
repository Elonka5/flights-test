import economyImage from "../assets/images/img_class/economy_seats.png";
import businessImage from "../assets/images/img_class/business_seats.png";

export const renderImgClass = (className: string) => {
switch (className) {
    case "business":
        return businessImage;
    case "economy":
        return economyImage ;
    default:
        return "";
}
};