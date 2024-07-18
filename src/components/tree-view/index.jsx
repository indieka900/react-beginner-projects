/* eslint-disable react/prop-types */
import MenuList from "./menuList";

export default function TreeView({menus = []}){
    return(
        <div className="tree-view-container">
            <MenuList list={menus}/>
        </div>
    );
}