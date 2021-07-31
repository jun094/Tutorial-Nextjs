import { Menu } from 'semantic-ui-react';
import { useRouter } from 'next/router';

function Gnb() {
    const router = useRouter();
    let activeItem;

    if (router.pathname === '/') {
        activeItem = 'home';
    } else if (router.pathname === '/about') {
        activeItem = 'about';
    }

    //semantic-ui Menu 제공 기능
    //menu.item 의 name --> data.name
    const goLink = (e, data) => {
        if (data.name === 'home') {
            router.push('/');
        } else if (data.name === 'about') {
            router.push('/about');
        } else if (data.name === 'contact') {
            router.push('/contact');
        }
    };

    return (
        <Menu inverted>
            <Menu.Item name="home" active={activeItem === 'home'} onClick={goLink} />
            <Menu.Item name="about" active={activeItem === 'about'} onClick={goLink} />
            <Menu.Item name="contact" active={activeItem === 'contact'} onClick={goLink} />
        </Menu>
    );
}

export default Gnb;
