export default function BotaoCompartilhar() {
    <div className={styles.dropdown}>
        <button onClick={toggleMenu} className={styles.dropbtn}>
        <ImShare/> Compartilhar
        </button>
        <div className={`${styles.dropdownContent} ${showMenu && styles.show}`} onBlur={closeMenu}>
            <a target="_blank" href={`https://api.whatsapp.com/send?text=www.nomedosite.com.br/noticia/${query.id}`}>WhatsApp</a>
            <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https://www.nomedosite.com.br/noticia/${query.id}`}>Facebook</a>
        </div>        
    </div>
}