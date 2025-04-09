import UserPrefs from '../../components/UserPrefs/UserPrefs'
import UserProfile from '../../components/UserProfile/UserProfile'
import css from './UserPage.module.css'

export default function UserPage() {
    return (
        <div>
            <div>
                <UserProfile />
            </div>
            <div>
                <UserPrefs />
            </div>
        </div>
    )
}