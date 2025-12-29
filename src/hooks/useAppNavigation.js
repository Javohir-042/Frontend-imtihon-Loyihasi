import { useNavigate } from "react-router-dom";

export const useAppNavigation = () => {
    const navigate = useNavigate();

    return {
        goToHome: () => navigate("/"),
        goToAbout: () => navigate("/o_кoмпaнии"),
        goToPopular: () => navigate("/popular-products"), 
        goToCatalog: () => navigate("/Каталог"),
        goToBlog: () => navigate("/Блог"),
        goToKatalog: () => navigate("/Каталог"),
        goToКорзина: () => navigate("/Корзина"),
        goToDelivery: () => navigate("/Доставка"),
        goToReturn: () => navigate("/Возврат"),
        goToWarranty: () => navigate("/Гарантии"),
        goToContacts: () => navigate("/Контакты"),
        goToИзбранные: () => navigate("/Избранные")
    };
};