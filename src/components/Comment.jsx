import { Trash, ThumbsUp } from "phosphor-react"

import styles from "./Comment.module.css"

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/oFernandoLima.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Fernando Lima</strong>
                            <time title='22 de Janeiro às 19:54h' dateTime='2024-01-22 19:54:37'>Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, Parabéns!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )    
}