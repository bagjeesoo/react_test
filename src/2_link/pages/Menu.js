import { Link } from "react-router-dom";

const styles = {
    navStyles : {
        color : 'red',
        backgroundColor : 'yellow',
        textDecoration : 'none',
        border : '2px dashed bule'
    },

    lineStyles : {
        display : 'inline',
        padding : '20px'
    }
}

const Menu = () => {

    // <a> 태그는 화면을 갱신함.=> 리액트에서는 <Link to=''/> 태그를 씀
    return(
        <div style={styles.navStyles}>
            <ul>                
                <li style={styles.lineStyles}>
                    {/* <a href='/'>홈</a> */}
                    <Link to='/'>홈</Link>
                </li>
                <li style={styles.lineStyles}>
                    {/* <a href='/first'>첫번째</a> */}
                    <Link to='/first'>첫번째2</Link>
                </li>
                <li style={styles.lineStyles}>
                    {/* <a href='/second'>두번째</a> */}
                    <Link to='/second'>두번째2</Link>
                </li>
                <li style={styles.lineStyles}>
                    <Link to='/third'>세번째2</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;