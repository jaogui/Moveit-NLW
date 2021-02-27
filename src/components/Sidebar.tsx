import  style  from '../styles/components/Sidebar.module.css';


export function Sidebar() {
    return(
        <div className={style.sidebarContainer}>
            <img src="../icons/logo.svg" alt="Moveit logo"/>
                <div className= {style.sidebarToggle}>
                    <input id="switch" type="checkbox" name="theme" />
                    Dark Mode
                    <label for="switch">Toggle</label>
                </div>
        </div>
    );
}