import styles from './Post.module.css'

export function Post() {
    return(
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <img 
                            className={styles.avatar}
                            src="https://github.com/JoaoPSPereira.png"
                        />
                        <div className={styles.authorInfo}>
                            <strong>João P. S. Pereira</strong>
                            <span>Web Developer</span>
                        </div>
                    </div>

                    <time title="08 de Maio às 00:00" dateTime="2022-05-08 00:00:00">
                        Publicado à 1h
                    </time>

                </header>
                <div className={styles.content}>
                        <p>Partiu Ignite, mais conhecimentos e mais um desafio da Rocketseat.</p>
                        <p>
                            <a href=''>#curso</a>{' '}
                            <a href=''>#ignite</a>{' '}
                            <a href=''>#rocketseat</a>
                        </p>
                    </div>
            </article>
        </>
    )
}