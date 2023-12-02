import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';

const Menu = () => {
    const [menu] = useMenu();
    // console.log(menu)
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Menu | Bistro Boss </title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offered"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={pizza} img={pizzaImg} title={"pizza"}></MenuCategory>
            <MenuCategory items={soup} img={soupImg} title={"soup"}></MenuCategory>
            <MenuCategory items={dessert} img={dessertImg} title={"dessert"}></MenuCategory>
            <MenuCategory items={salad} img={saladImg} title={"salad"}></MenuCategory>
        </div>
    );
};

export default Menu;