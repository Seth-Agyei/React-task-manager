import { Link } from "react-router-dom"


export default function SettingsPreference(){
    return(
        <div>
            <h1>Manage your Preferences</h1>

            <div>
                <ul>
                    <li>
                        <Link to= "/theme-setting-section"> Theme Setting Section </Link>
                    </li>

                    <li>
                        <Link to= "/notification-setting-section"> Notification Setting Section </Link>
                    </li>

                    <li>
                        <Link to= "/account-setting-section"> Account Setting Section </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
        
} 