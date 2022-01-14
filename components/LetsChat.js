import workStyles from '../styles/work.module.scss'


function LetsChat (props) {
    return (
        <div className={workStyles.ChatContainer}>
            <div className={workStyles.ChatTitle}>Let's have a chat</div>
            <div className={workStyles.ChatItemContainer}>
                <div className={workStyles.ChatItem}>
                    <div className={workStyles.ChatItemTitle}>Build</div>
                    <div>Help you build something</div>
                </div>
                <div className={workStyles.ChatItem}>
                    <div className={workStyles.ChatItemTitle}>Co-insubate</div>
                    <div>Co-insubate an idea together</div>
                </div>
                <div className={workStyles.ChatItem}>
                    <div className={workStyles.ChatItemTitle}>Customise</div>
                    <div>Customise a solution for your business</div>
                </div>
                <div className={workStyles.ChatItem}>
                    <div className={workStyles.ChatItemTitle}>Organise</div>
                    <div>Organise learning sessions with us</div>
                </div>
            </div>
        </div>
    )
}

export default LetsChat