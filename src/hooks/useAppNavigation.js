import { useNavigate } from "react-router-dom";

export const useAppNavigation = () => {
    const navigate = useNavigate();

    return {
        goToHome: () => navigate("/"),
        goToAbout: () => navigate("/o_кoмпaнии"),
        goToPopular: () => navigate("/popular-products"), 
        goToCatalog: () => navigate("/catalog"),
        goToBlog: () => navigate("/Блог"),
        goToKatalog: () => navigate("/Каталог")
    };
};