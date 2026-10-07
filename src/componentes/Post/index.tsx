

function Post() {
    return(
               <div className="post-container">

            <div className="post-header">
                <div className="post-avatar">
                    U
                </div>

                <div className="post-user">
                    <strong>Usuário FitFriend</strong>
                    <span>@usuario · há 2h</span>
                </div>
            </div>

            <div className="post-content">
                <p>
                    Hoje foi dia de treino! 💪
                    Mais um dia cuidando da saúde e mantendo o foco.
                </p>
            </div>

            <div className="post-actions">
                <button>♡ Curtir</button>   
            </div>

        </div>
    )
}


export default Post;

