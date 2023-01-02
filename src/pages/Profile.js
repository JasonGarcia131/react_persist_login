import Banner from "../../../react_persist_login/src/components/Banner";
import UserCard from "../components/UserCard";
import MainCard from "../../../react_persist_login/src/components/MainCard";
import { useState } from "react";
import { useEffect } from "react";

function Profile() {

    const [theme, setTheme] = useState("");

    useEffect(() => {
        setTheme("light");
    }, [])

    console.log("Theme", theme);

    return (
        <div >
            <Banner theme={theme} setTheme={setTheme} />
            <UserCard theme={theme}/>
            <MainCard theme={theme}/>
        </div>
    )

}

export default Profile;